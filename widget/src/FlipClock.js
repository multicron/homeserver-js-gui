import React from 'react';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { connect } from 'react-redux';
import { inspect } from 'util';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { jsxFragment } from '@babel/types';
import Card from '@material-ui/core/Card';
import CardContents from '@material-ui/core/Card';
import { Flip } from '@homeserver-js-gui/widget';

class FlipClock extends React.Component {

    static defaultProps = {
        separator: ":"
    };

    constructor(props) {
        super(props);
        this.props = props;

        this.state = this.get_time();
    }

    get_time() {
        let t = new Date();
        let hour = t.getHours();
        let min = t.getMinutes().toString().padStart(2, '0');
        let sec = t.getSeconds().toString().padStart(2, '0');
        let ampm = "";

        if (hour === 0 || hour === 24) {
            hour = 12;
            ampm = "AM";
        }
        else if (hour > 12) {
            hour -= 12;
            ampm = "PM";
        }
        // hour = hour.toString().padStart(2, ' ');
        let time = `${hour}:${min}:${sec}`;

        return { time: time, hour: hour, minute: min, second: sec, ampm: ampm };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(this.get_time());
        }, 1000);
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        return (
            <>
                <Grid component="label" container alignItems="center" direction="column" spacing={1}>
                    <Grid item p={5} xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card><CardContents style={{ padding: "8px 0px" }}>
                            <Typography component="div" noWrap variant="h3">
                                <Flip value={this.state.hour} />{this.props.separator}
                                <Flip value={this.state.minute} />{this.props.separator}
                                <Flip value={this.state.second} />
                            </Typography>
                        </CardContents></Card>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default FlipClock;
