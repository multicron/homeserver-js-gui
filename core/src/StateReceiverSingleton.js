import { MQTTClientSingleton } from './MQTTClientSingleton.js';
import { StateHolder } from './StateHolder.js';

const debug = require('debug')('homeservergui:state');

export class StateReceiverSingleton extends StateHolder {

    static singleton;

    constructor(name) {
        super(name);

        if (StateReceiverSingleton.singleton !== undefined) {
            return StateReceiverSingleton.singleton;
        }
        else {
            StateReceiverSingleton.singleton = this;
        }

        this.mqtt_client = new MQTTClientSingleton().mqtt_client;

        this.mqtt_client.on('message', (topic, message) => {
            debug(`StateReceiverSingleton Received ${topic} ${message.toString()}`);
            this.receive_mqtt_msg(topic, message.toString());
        });

        this.mqtt_client.on('connect', () => {
            debug("MQTT Connect");
            this.subscribe_state_store();
            this.request_state_store();
            this.subscribe_topic();
            this.emit('connect');
        });
    }

    subscribe_state_store() {
        if (this.mqtt_is_subscribed_to_state_store) return;

        this.mqtt_client.subscribe(this.state_store_topic, { qos: this.qos }, (err) => {
            if (err) {
                debug(`Error subscribing to state store: ${err}`);
            }
        });

        this.mqtt_is_subscribed_to_state_store = true;
        debug("Subscribed to state store", this.state_store_topic);
    }

    subscribe_topic() {

        this.mqtt_client.subscribe(this.dispatch_topic, { qos: this.qos }, (err) => {
            if (err) {
                debug(`Error subscribing to dispatch topic: ${err}`);
            }
        });

        debug("Subscribed to topic", this.dispatch_topic);
    }

    request_state_store() {
        let options = {
            qos: 0,
            retain: false,
            dup: false
        };

        this.mqtt_client.publish(this.request_state_store_topic, "", options, () => {
            debug(`Sent state store request to ${this.request_state_store_topic}`);
            this.subscribe_state_store();
        });
    }

    receive_mqtt_msg(topic, message) {
        // Check if it is a state store update or a dispatch (action) update

        // debug("StateReceiver Receiving", topic);

        if (topic === this.dispatch_topic) {
            this.receive_dispatch(message);
        }
        else if (topic === this.state_store_topic) {
            this.receive_state_store(message);
        }
    }

    receive_state_store(message) {
        if (this.mqtt_is_subscribed_to_state_store) {
            debug("StateReceiver Unsubscribing from state store topic");
            this.mqtt_client.unsubscribe(this.state_store_topic);
            this.mqtt_is_subscribed_to_state_store = false;
        }

        this.replace(message);
        this.emit('replace');
    }

    receive_dispatch(message) {
        let action = JSON.parse(message);

        // Add this offset to times on the client to get time on the server

        this.server_time_offset = (action.timestamp ? action.timestamp - Date.now() : 0);

        // debug(`server_time_offset is ${this.server_time_offset}`);

        // debug("Store is now:", this.store.getState());

        this.store.dispatch(action);
        // debug("Received update for", action.payload.device_name);

        this.emit('update_any', message);
    }
}

