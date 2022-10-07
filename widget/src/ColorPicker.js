import React from 'react';
import { MQTTClientSingleton } from '@homeserver-js-gui/core';
import { connect } from 'react-redux';
import { ColorPicker as PrimeColorPicker } from 'primereact/colorpicker';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Configuration } from '@homeserver-js-gui/core';


class __ColorPicker extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;

        this.last_xmit = new Date();

        this.client = new MQTTClientSingleton().mqtt_client;
    }

    mqttSend(topic, value) {
        return new Promise(((resolve, reject) => {

            let options = {
                qos: this.props.qos,
                retain: this.props.retain,
                dup: this.props.dup
            };

            this.client.publish(topic, value, options);
            console.log("Sent MQTT Message");
            resolve(1);

        }));
    }

    async send_mqtt_msg(topic, message) {
        const answer = await this.mqttSend(topic, message);
        console.log("Result from mqttSend:", answer);
    }

    handleChange(event) {
        let value = event.value;
        let now = new Date();
        if (now.getTime() - this.last_xmit.getTime() > this.props.max_update_rate) {
            let command = `${this.props.topic}/${this.props.name}/${this.props.field}`;
            console.log("Sending command", command, "Value", value);
            this.send_mqtt_msg(command, value.toString());
            this.last_xmit = now;
        }
    }

    render() {
        return (
            <>
                <PrimeColorPicker
                    inline={true}
                    onChange={this.handleChange.bind(this)}
                >
                </PrimeColorPicker >
                <div>{this.props.caption} {this.props.value}</div>
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let name = ownProps.name;
    let field = ownProps.field;
    let key = name;

    return {
        value: (state[key] ? state[key][field] : ownProps.value),
        unknown: (state[key] === undefined)
    }
}

export const ColorPicker = connect(
    mapStateToProps
)(__ColorPicker)

ColorPicker.defaultProps = {
    broker: Configuration.gui_mqtt_broker_url,
    topic: Configuration.mqtt_command_topic,
    field: "color",
    qos: 0,
    retain: false,
    dup: false,
    true_value: "true",
    false_value: "false",
    color: "primary",
    debug: false,
    value: "#FF00FF",
    min: 0,
    max: 100,
    step: 5,
    max_update_rate: 250
}

export default ColorPicker;
