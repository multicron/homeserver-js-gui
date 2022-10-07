import { Configuration } from './Configuration.js';

const mqtt = require('mqtt');
const uuid = require('uuid');
const EventEmitter = require('events');
const debug = require('debug')('homeservergui:mqtt');

export class MQTTClientSingleton extends EventEmitter {

    static singleton;

    constructor() {
        super();

        if (MQTTClientSingleton.singleton !== undefined) {
            return MQTTClientSingleton.singleton;
        }
        else {
            MQTTClientSingleton.singleton = this;
        }

        this.setMaxListeners(1000);

        this.qos = 0;
        this.mqtt_client_id = "MQTTClientSingleton_" + uuid.v4();

        debug("Configuration is", JSON.parse(JSON.stringify(Configuration)));
        debug("Connecting to mqtt broker", Configuration.gui_mqtt_broker_url);

        this.mqtt_client = mqtt.connect(
            "ws://bluby.mooo.com:3030/",
            {
                clientId: this.mqtt_client_id,
                username: Configuration.mqtt_broker_login,
                password: Configuration.mqtt_broker_password
            });

        this.mqtt_client.setMaxListeners(1000);
    }
}
