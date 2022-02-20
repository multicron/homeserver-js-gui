function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { _ToggleSwitch } from '@homeserver-js-gui/widget';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
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
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [this.props.debug ? this.debug_data() : "", /*#__PURE__*/_jsx(Typography, {
        component: "div",
        children: /*#__PURE__*/_jsxs(Grid, {
          container: true,
          component: "div",
          alignItems: "center",
          direction: "column",
          spacing: 1,
          justify: "space-evenly",
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            children: this.props.name
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            children: /*#__PURE__*/_jsxs(Grid, {
              container: true,
              component: "div",
              alignItems: "center",
              spacing: 1,
              children: [/*#__PURE__*/_jsx(Grid, {
                item: true,
                children: /*#__PURE__*/_jsx(Button, {
                  variant: this.props.variant,
                  size: this.props.size,
                  onClick: e => this.handleChange(e, true),
                  color: this.props.color,
                  children: "ON"
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                children: /*#__PURE__*/_jsx(Button, {
                  variant: this.props.variant,
                  size: this.props.size,
                  onClick: e => this.handleChange(e, false),
                  color: this.props.color,
                  children: "OFF"
                })
              })]
            })
          })]
        })
      })]
    });
  }

}

_defineProperty(_IconSwitch, "defaultProps", { ..._get(_getPrototypeOf(_IconSwitch), "defaultProps", _IconSwitch),
  size: "small",
  variant: "outlined"
});

export const IconSwitch = _IconSwitch.functionalize();