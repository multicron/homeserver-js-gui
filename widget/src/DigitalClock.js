import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time: "---" };
        this.set_time();
        this.interval = undefined;

    }

    set_time() {
        const locale = this.props.locale ? this.props.locale : [];
        const hour12 = (this.props.hour12 == false) ? false : true;
        let hour, minute, second;
        if (this.props.format) {
            switch (this.props.format.toLowerCase()) {
                case 'hh':
                    hour = '2-digit';
                    break;
                case 'hh-mm':
                    hour = '2-digit';
                    minute = '2-digit';
                    break;
                case 'hh-mm-ss':
                    hour = '2-digit';
                    minute = '2-digit';
                    second = '2-digit';
                    break;
                default:
                    hour = '2-digit';
                    minute = '2-digit';
                    second = '2-digit';
            }
        }
        let time = new Date().toLocaleTimeString(locale, { 'hour12': hour12, 'hour': hour, 'minute': minute, 'second': second });

        this.setState({ time: time });
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.set_time();
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
                    <Grid item>
                        <Typography component="div">
                            {this.props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component="div" noWrap variant="h3">
                            {this.state.time}
                        </Typography>
                    </Grid>
                </Grid>
            </>

        );
    }
}
export default Clock;
