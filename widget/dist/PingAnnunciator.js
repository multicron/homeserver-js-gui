function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { Annunciator } from '@homeserver-js-gui/widget';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { inspect } from 'util';
export class PingAnnunciator extends Annunciator {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
      component: "label",
      container: true,
      alignItems: "center",
      direction: "column",
      spacing: 1
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Typography, {
      component: "div",
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      style: {
        color: this.value ? "green" : "red",
        "textDecoration": "none"
      },
      href: `http://${this.props.title}:${this.props.port}/`
    }, this.props.comment, /*#__PURE__*/React.createElement("br", null), this.props.name, /*#__PURE__*/React.createElement("br", null), this.props.ip, this.props.port === "80" ? "" : `:${this.props.port}`)))));
  }

}

_defineProperty(PingAnnunciator, "defaultProps", { ..._get(_getPrototypeOf(PingAnnunciator), "defaultProps", PingAnnunciator),
  field: "reachable"
});

export default PingAnnunciator.functionalize();