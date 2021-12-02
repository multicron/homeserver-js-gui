function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { _IconSwitch } from '@homeserver-js-gui/widget';
export class _EnableButton extends _IconSwitch {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.debug ? this.debug_data() : "", /*#__PURE__*/React.createElement(Typography, {
      component: "span"
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      component: "div",
      alignItems: "center",
      direction: "column",
      spacing: 1,
      justify: "space-evenly"
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, "\xA0"), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: 1,
      component: "div",
      direction: "column",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      p: 5
    }, /*#__PURE__*/React.createElement(Button, {
      variant: this.props.variant,
      size: this.props.size,
      onClick: e => this.handleChange(e, true),
      color: this.props.color,
      style: {
        textTransform: 'none'
      }
    }, this.props.name)))), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }))));
  }

}

_defineProperty(_EnableButton, "defaultProps", { ..._get(_getPrototypeOf(_EnableButton), "defaultProps", _EnableButton),
  field: "activate",
  size: "large"
});

export const EnableButton = _EnableButton.functionalize();