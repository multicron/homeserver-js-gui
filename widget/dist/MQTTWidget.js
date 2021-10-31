function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { inspect } from 'util';
import { configuration } from '@homeserver-js-gui/core';
import { HybridComponent } from '@homeserver-js-gui/core';
import logger from "debug";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
const debug = logger('homeservergui:mqttwidget');
export class _MQTTWidget extends HybridComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onConnect", () => {
      debug("state_subscriber connect for ", this.variable_name());
    });

    _defineProperty(this, "onReplace", () => {
      debug("state_subscriber replace for ", this.variable_name());
    });

    _defineProperty(this, "onUpdate", message => {// debug("state_subscriber update for ", this.variable_name(), message);
    });

    this.props = props; // This call also makes sure we are subscribed to the mqtt topic for
    // updates to the redux state for this device:

    this.state_subscriber = new StateSubscriber(this.variable_name());
    this.client = this.state_subscriber.mqtt_client;
    this.state_subscriber.on('connect', this.onConnect);
    this.state_subscriber.on('replace', this.onReplace);
    this.state_subscriber.on('update', this.onUpdate);
  }

  mqttSend(topic, value) {
    return new Promise((resolve, reject) => {
      let options = {
        qos: this.props.qos,
        retain: this.props.retain,
        dup: this.props.dup
      };
      this.client.publish(topic, value, options);
      debug("Sent MQTT Message");
      resolve(1);
    });
  }

  async send_mqtt_msg(topic, message) {
    const answer = await this.mqttSend(topic, message);
    debug("Result from mqttSend:", answer);
  }

  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  debug_data() {
    return /*#__PURE__*/_jsxs("div", {
      children: ["State: ", inspect(this.state_subscriber.get()), /*#__PURE__*/_jsx("br", {}), "Props: ", inspect(this.props)]
    });
  }

  hooks(props) {
    super.hooks(props);
  }

  render(props) {
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [this.props.debug ? this.debug_data() : "", "MQTTWidget"]
    });
  }

}

_defineProperty(_MQTTWidget, "defaultProps", {
  broker: configuration.mqtt_broker_url,
  topic: configuration.mqtt_command_topic,
  field: "power",
  qos: 0,
  retain: false,
  dup: false,
  color: "primary",
  debug: false
});

export const MQTTWidget = _MQTTWidget.functionalize();