import React from 'react';
import { Switch } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ToggleSwitch } from '@homeserver-js-gui/widget';
import { Slider } from '@homeserver-js-gui/widget';
import { Configuration } from '@homeserver-js-gui/core';


export class TasmotaBulb extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <Grid container direction="column" justify="space-evenly" alignItems="stretch">
                <Grid item>
                    <Box p={1}>
                        <ToggleSwitch
                            name={this.props.name}
                            broker={this.props.broker}
                            topic={this.props.topic}
                            field="power"
                            true_value={this.props.true_value}
                            false_value={this.props.false_value}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Box p={1}>
                        <Slider name={this.props.name} caption="Brightness" field="dimmer" min={0} max={100} step={5} /><br />
                    </Box>
                </Grid >
                <Grid item>
                    <Box p={1}>
                        <Slider name={this.props.name} caption="Color Temperature" field="color_temperature" min={2000} max={5000} step={100} value={3500} /> <br />
                    </Box>
                </Grid>
            </Grid >
        );
    }
}

TasmotaBulb.defaultProps = {
    broker: Configuration.gui_mqtt_broker_url,
    topic: Configuration.mqtt_command_topic,
    qos: 0,
    retain: false,
    dup: false,
    true_value: "true",
    false_value: "false",
    color: "primary",
    debug: false
}

export default TasmotaBulb;
