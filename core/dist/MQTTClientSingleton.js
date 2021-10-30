function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { configuration } from '@homeserver-js-gui/core';

const mqtt = require('mqtt');

const uuid = require('uuid');

const EventEmitter = require('events');

const debug = require('debug')('homeservergui:mqtt');

export class MQTTClientSingleton extends EventEmitter {
  constructor() {
    super();

    if (MQTTClientSingleton.singleton !== undefined) {
      return MQTTClientSingleton.singleton;
    } else {
      MQTTClientSingleton.singleton = this;
    }

    this.setMaxListeners(1000);
    this.qos = 0;
    this.mqtt_client_id = "MQTTClientSingleton_" + uuid.v4();
    debug("Connecting to", configuration.mqtt_broker_url);
    this.mqtt_client = mqtt.connect(configuration.mqtt_broker_url, {
      clientId: this.mqtt_client_id,
      username: configuration.mqtt_broker_login,
      password: configuration.mqtt_broker_password
    });
    this.mqtt_client.setMaxListeners(1000);
  }

}

_defineProperty(MQTTClientSingleton, "singleton", void 0);