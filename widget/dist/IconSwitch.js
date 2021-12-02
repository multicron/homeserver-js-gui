function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { _ToggleSwitch } from '@homeserver-js-gui/widget';
export class _IconSwitch extends _ToggleSwitch {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", (event, value) => {
      let command = `${this.props.topic}/${this.variable_name()}/${this.props.field}`;
      console.log("Sending command", command, "value", value);
      this.send_mqtt_msg(command, value ? this.props.true_value : this.props.false_value);
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.debug ? this.debug_data() : "", /*#__PURE__*/React.createElement(Typography, {
      component: "div"
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      component: "div",
      alignItems: "center",
      direction: "column",
      spacing: 1,
      justify: "space-evenly"
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, this.props.name), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      component: "div",
      alignItems: "center",
      spacing: 1
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Button, {
      variant: this.props.variant,
      size: this.props.size,
      onClick: e => this.handleChange(e, true),
      color: this.props.color
    }, "ON")), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Button, {
      variant: this.props.variant,
      size: this.props.size,
      onClick: e => this.handleChange(e, false),
      color: this.props.color
    }, "OFF")))))));
  }

}

_defineProperty(_IconSwitch, "defaultProps", { ..._get(_getPrototypeOf(_IconSwitch), "defaultProps", _IconSwitch),
  size: "small",
  variant: "outlined"
});

export const IconSwitch = _IconSwitch.functionalize();