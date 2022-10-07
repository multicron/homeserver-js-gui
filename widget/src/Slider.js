/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { Slider as PrimeSlider } from 'primereact/slider';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Configuration } from '@homeserver-js-gui/core';
import { _MQTTWidget } from '@homeserver-js-gui/widget';
import { useSelector } from 'react-redux'

export class _Slider extends _MQTTWidget {

    static defaultProps = {
        ...super.defaultProps,
        field: "dimmer",
        value: 50,
        min: 0,
        max: 100,
        step: 5,
        max_update_rate: Configuration.mqtt_max_update_rate
    }

    constructor(props) {
        super(props);

        this.last_xmit = Date.now();
    }

    format_value(value) {
        let val = value || 0;
        if (this.props.value_format === "time") {
            return (new Date(val * 1000).toISOString().substr(11, 8));
        }
        else {
            return value;
        }
    }

    handleChange = (event) => {
        let value = event.value;
        let now = Date.now();

        // Modify the local copy of the redux state from the server
        // TODO: this is almost certainly the wrong way to go about this!

        this.state_subscriber.modify({ [this.props.field]: value });

        if (now - this.last_xmit > this.props.max_update_rate) {
            let command = `${this.props.topic}/${this.props.name}/${this.props.field}`;
            console.log("Sending command", command, "Value", value);
            this.send_mqtt_msg(command, value.toString());
            this.last_xmit = now;
        }
        else {
            // console.log("Command sending throttled");
        }
    }

    hooks(props) {
        super.hooks(props);

        let field = props.field;
        let key = this.props.name;

        this.value = useSelector(state_store => (state_store[key] ? state_store[key][field] : props.value));
    }

    render() {
        return (
            <>
                <PrimeSlider
                    onChange={this.handleChange.bind(this)}
                    onSlideEnd={this.handleChange.bind(this)}
                    value={this.value}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                >
                </PrimeSlider >
                <div>{this.props.caption} {this.format_value(this.value)}</div>
            </>
        );
    }
}

export const Slider = _Slider.functionalize();
