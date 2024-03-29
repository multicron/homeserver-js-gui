function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Slider as PrimeSlider } from 'primereact/slider';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Configuration } from '@homeserver-js-gui/core';
import { _MQTTWidget } from '@homeserver-js-gui/widget';
import { useSelector } from 'react-redux';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export class _Slider extends _MQTTWidget {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", event => {
      let value = event.value;
      let now = Date.now(); // Modify the local copy of the redux state from the server
      // TODO: this is almost certainly the wrong way to go about this!

      this.state_subscriber.modify({
        [this.props.field]: value
      });

      if (now - this.last_xmit > this.props.max_update_rate) {
        let command = `${this.props.topic}/${this.variable_name()}/${this.props.field}`;
        console.log("Sending command", command, "Value", value);
        this.send_mqtt_msg(command, value.toString());
        this.last_xmit = now;
      } else {// console.log("Command sending throttled");
      }
    });

    this.last_xmit = Date.now();
  }

  format_value(value) {
    let val = value || 0;

    if (this.props.value_format === "time") {
      return new Date(val * 1000).toISOString().substr(11, 8);
    } else {
      return value;
    }
  }

  hooks(props) {
    super.hooks(props);
    let field = props.field;
    let key = this.variable_name();
    this.value = useSelector(state_store => state_store[key] ? state_store[key][field] : props.value);
  }

  render() {
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(PrimeSlider, {
        onChange: this.handleChange.bind(this),
        onSlideEnd: this.handleChange.bind(this),
        value: this.value,
        min: this.props.min,
        max: this.props.max,
        step: this.props.step
      }), /*#__PURE__*/_jsxs("div", {
        children: [this.props.caption, " ", this.format_value(this.value)]
      })]
    });
  }

}

_defineProperty(_Slider, "defaultProps", { ..._get(_getPrototypeOf(_Slider), "defaultProps", _Slider),
  field: "dimmer",
  value: 50,
  min: 0,
  max: 100,
  step: 5,
  max_update_rate: Configuration.mqtt_max_update_rate
});

export const Slider = _Slider.functionalize();