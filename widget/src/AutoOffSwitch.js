import React from 'react';
import Title from 'Title';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ToggleSwitch from 'Widget/ToggleSwitch';
import Slider from 'Widget/Slider';
import StateDisplay from 'Widget/StateDisplay';
import IconSwitch from 'Widget/IconSwitch';
import { connect } from 'react-redux';
import { inspect } from 'util';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import configuration from '@homeserver-js-gui/core/configuration.js';

import { StateSubscriber } from 'StateSubscriber';

class __AutoOffSwitch extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;
        this.stateholder = new StateSubscriber();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let now = Date.now();
        let start_time = this.props.start_time || now;
        let seconds_since_start = Math.floor((now - this.props.start_time + this.stateholder.server_time_offset) / 1000);
        let seconds_left = this.props.timeout - seconds_since_start;

        //        console.log("Seconds left", seconds_left);

        let time_left_string = new Date(seconds_left * 1000).toISOString().substr(11, 8);

        return (
            <Card> <CardContent>
                <Grid container direction="column" justify="space-evenly" alignItems="stretch">
                    <Grid item p={1}>
                        <ToggleSwitch
                            name={this.props.name}
                            broker={this.props.broker}
                            topic={this.props.topic}
                            field="power"
                            true_value={this.props.true_value}
                            false_value={this.props.false_value}
                        />
                    </Grid>
                    <Grid item>
                        <Box >
                            <Slider name={this.props.name} caption="Time" value_format="time" field="timeout" min={0} max={2 * 60 * 60} step={5} /><br />
                        </Box>
                    </Grid >
                    <Grid item>
                        <Box >
                            Time Left: {this.props.start_time ? time_left_string : "Off"}
                        </Box>
                    </Grid>
                </Grid >
            </CardContent></Card >

        );
    }
}

function mapStateToProps(state, ownProps) {
    let name = ownProps.name;
    let field = ownProps.field;
    let key = name.replace(/[^A-Za-z0-9_]/g, "_");

    return {
        checked: (state[key] ? !!state[key][field] : false),
        start_time: (state[key] ? state[key]['start_time'] : null),
        timeout: (state[key] ? state[key]['timeout'] : null)
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

const AutoOffSwitch = connect(
    mapStateToProps
)(__AutoOffSwitch)

AutoOffSwitch.defaultProps = {
    broker: configuration.mqtt_broker_url,
    topic: configuration.mqtt_command_topic,
    qos: 0,
    retain: false,
    dup: false,
    true_value: "true",
    false_value: "false",
    color: "primary",
    debug: false,
    field: "power"
}

export default AutoOffSwitch;