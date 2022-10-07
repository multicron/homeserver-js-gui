import React from 'react';
import { Switch } from '@material-ui/core';
import mqtt from 'mqtt';
import { Configuration } from './Configuration.js';

const debug = require('debug')('homeservergui:mqttswitch');

export class MQTTSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            power: props.power
        };

        this.true_regexp = new RegExp('^\s*(true|1|yes|on)\s*$', 'i');
        this.false_regexp = new RegExp('^\s*(false|0|no|off)\s*$', 'i');

        this.client = mqtt.connect(this.props.broker);
        this.client.on('connect', () => {
            debug("Connected to MQTT broker");
        });

        this.client.on('error', (theError) => {
            this.client.end();
            debug(theError.toString());
        });

        this.client.subscribe(this.props.topic, { qos: this.props.qos }, (err) => {
            if (err) {
                debug(`Error subscribing to topic: ${err}`);
            }
        });

        this.client.on('message', (topic, message) => {
            this.receive_mqtt_msg(topic, message.toString());
        });
    }


    mqttSend(topic, value) {
        return new Promise(((resolve, reject) => {

            let options = {
                qos: this.props.qos,
                retain: this.props.retain,
                dup: this.props.dup
            };

            this.client.publish(topic, value, options);
            debug("Sent MQTT Message", topic, value);
            resolve(1);

        }));
    }

    booleanize(value) {
        if (this.true_regexp.test(value)) { return true; }
        if (this.false_regexp.test(value)) { return false; }
        return null;
    }

    receive_mqtt_msg(topic, message) {
        debug(`Received message "${message}" from topic ${topic}`);
        this.setState({ power: this.booleanize(message) });
    }

    async send_mqtt_msg(topic, message) {
        const answer = await this.mqttSend(topic, message);
        debug("Result from mqttSend:", answer);
    }

    handleChange(name, event) {
        debug("checked", event.target.checked);
        this.setState({ [name]: !!event.target.checked }, () => {
            this.send_mqtt_msg(this.props.topic, this.state.power ? this.props.true_value : this.props.false_value);
        });
    }

    render() {
        return (
            <>
                <Switch
                    checked={this.state.power}
                    onChange={this.handleChange.bind(this, 'power')}
                    disabled={this.props.disabled}
                    color="primary"
                    inputProps={{ 'aria-label': 'power switch' }}
                />{this.props.topic}
            </>
        );
    }
}

MQTTSwitch.defaultProps = {
    broker: Configuration.gui_mqtt_broker_url,
    topic: "tasmotas/rgb-bulb-5/cmnd/POWER",
    qos: 0,
    retain: false,
    dup: false,
    true_value: "ON",
    false_value: "OFF",
    color: "primary",
    debug: false,
    disabled: true
}

export default MQTTSwitch;
