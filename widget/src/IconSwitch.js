import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { _ToggleSwitch } from '@homeserver-js-gui/widget';

export class _IconSwitch extends _ToggleSwitch {

    static defaultProps = {
        ...super.defaultProps,
        size: "small",
        variant: "outlined"
    }

    // handleChange needs to get "this" lexically

    handleChange = (event, value) => {
        let command = `${this.props.topic}/${this.variable_name()}/${this.props.field}`;
        console.log("Sending command", command, "value", value);
        this.send_mqtt_msg(command, value ? this.props.true_value : this.props.false_value);

    }

    render() {
        return (
            <>
                {this.props.debug ? this.debug_data() : ""}
                < Typography component="div" >
                    <Grid
                        container component="div"
                        alignItems="center"
                        direction="column"
                        spacing={1}
                        justify="space-evenly"
                    >
                        <Grid item>{this.props.name}</Grid>
                        <Grid item>
                            <Grid container component="div" alignItems="center" spacing={1}>
                                <Grid item>
                                    <Button
                                        variant={this.props.variant}
                                        size={this.props.size}
                                        onClick={(e) => this.handleChange(e, true)}
                                        color={this.props.color}
                                    >
                                        ON
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant={this.props.variant}
                                        size={this.props.size}
                                        onClick={(e) => this.handleChange(e, false)}
                                        color={this.props.color}
                                    >
                                        OFF
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography >
            </>
        );
    }
}

export const IconSwitch = _IconSwitch.functionalize();
