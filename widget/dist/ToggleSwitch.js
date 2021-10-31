function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { _MQTTWidget } from '@homeserver-js-gui/widget';
import { useSelector } from 'react-redux';
import logger from "debug";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
const debug = logger('homeservergui:toggleswitch');
export class _ToggleSwitch extends _MQTTWidget {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", event => {
      debug("checked", event.target.checked);
      let command = `${this.props.topic}/${this.variable_name()}/${this.props.field}`;
      debug("Sending command", command, "for", this.variable_name());
      this.send_mqtt_msg(command, event.target.checked ? this.props.true_value : this.props.false_value);
    });
  }

  hooks(props) {
    super.hooks(props);
    let field = props.field;
    let key = this.variable_name();
    this.checked = useSelector(state_store => state_store[key] ? !!state_store[key][field] : false);
  }

  render(props) {
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [this.props.debug ? this.debug_data() : "", /*#__PURE__*/_jsxs(Grid, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1,
        children: [/*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Typography, {
            component: "div",
            children: this.props.name
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Switch, {
            checked: this.checked,
            onChange: this.handleChange,
            color: this.props.color
          })
        })]
      })]
    });
  }

}

_defineProperty(_ToggleSwitch, "defaultProps", { ..._get(_getPrototypeOf(_ToggleSwitch), "defaultProps", _ToggleSwitch),
  field: "power",
  true_value: "true",
  false_value: "false",
  checked: false,
  debug: false
});

export const ToggleSwitch = _ToggleSwitch.functionalize();