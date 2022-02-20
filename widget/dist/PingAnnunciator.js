function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { _Annunciator } from '@homeserver-js-gui/widget';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export class _PingAnnunciator extends _Annunciator {
  render() {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsx(Grid, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1,
        children: /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Typography, {
            component: "div",
            style: {
              textAlign: "center"
            },
            children: /*#__PURE__*/_jsxs("a", {
              target: "_blank",
              rel: "noreferrer",
              style: {
                color: this.value ? "green" : "red",
                "textDecoration": "none"
              },
              href: `http://${this.props.title}:${this.props.port}/`,
              children: [this.props.comment, /*#__PURE__*/_jsx("br", {}), this.props.name, /*#__PURE__*/_jsx("br", {}), this.props.ip, this.props.port === "80" ? "" : `:${this.props.port}`]
            })
          })
        })
      })
    });
  }

}

_defineProperty(_PingAnnunciator, "defaultProps", { ..._get(_getPrototypeOf(_PingAnnunciator), "defaultProps", _PingAnnunciator),
  field: "reachable"
});

export const PingAnnunciator = _PingAnnunciator.functionalize();