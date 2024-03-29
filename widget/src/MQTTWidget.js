import React from 'react';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { inspect } from 'util';
import { Configuration } from '@homeserver-js-gui/core';
import { HybridComponent } from '@homeserver-js-gui/core';
import logger from "debug"; const debug = logger('homeservergui:mqttwidget');

export class _MQTTWidget extends HybridComponent {

    static defaultProps = {
        broker: Configuration.gui_mqtt_broker_url,
        topic: Configuration.mqtt_command_topic,
        field: "power",
        qos: 0,
        retain: false,
        dup: false,
        color: "primary",
        debug: false,
    }

    constructor(props) {
        super(props);

        this.props = props;

        // This call also makes sure we are subscribed to the mqtt topic for
        // updates to the redux state for this device:

        this.state_subscriber = new StateSubscriber(this.props.name);

        this.client = this.state_subscriber.mqtt_client;

        this.state_subscriber.on('connect', this.onConnect);
        this.state_subscriber.on('replace', this.onReplace);
        this.state_subscriber.on('update', this.onUpdate);
    }

    onConnect = () => {
        debug("state_subscriber connect for ", this.props.name);
    }

    onReplace = () => {
        debug("state_subscriber replace for ", this.props.name);
    }

    onUpdate = (message) => {
        // debug("state_subscriber update for ", this.props.name, message);
    }

    mqttSend(topic, value) {
        return new Promise(((resolve, reject) => {

            let options = {
                qos: this.props.qos,
                retain: this.props.retain,
                dup: this.props.dup
            };

            this.client.publish(topic, value, options);
            debug("Sent MQTT Message");
            resolve(1);

        }));
    }

    async send_mqtt_msg(topic, message) {
        const answer = await this.mqttSend(topic, message);
        debug("Result from mqttSend:", answer);
    }

    debug_data() {
        return <div>State: {inspect(this.state_subscriber.get())}
            <br />
            Props: {inspect(this.props)}
        </div>
    }

    hooks(props) {
        super.hooks(props);
    }


    render(props) {
        return (
            <>
                {this.props.debug ? this.debug_data() : ""}
                MQTTWidget
            </>
        );
    }
}

export const MQTTWidget = _MQTTWidget.functionalize();
