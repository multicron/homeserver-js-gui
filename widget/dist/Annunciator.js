function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { HybridComponent } from '@homeserver-js-gui/core';
import { useSelector } from 'react-redux';
import { UpdateIndicator } from '@homeserver-js-gui/widget';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export class _Annunciator extends HybridComponent {
  constructor(props) {
    super(props);
  }

  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  replace_invalid(value, replacement) {
    if (value === undefined) return replacement;
    if (value === null) return replacement;
    if (value !== value) return replacement;
    return value;
  }

  hooks(props) {
    super.hooks(props);
    let field = props.field;
    let key = this.variable_name();
    this.value = useSelector(state_store => state_store[key] ? state_store[key][field] : null);
  }

  render() {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsxs(Grid, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1,
        children: [/*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Typography, {
            component: "div",
            children: this.props.title
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Typography, {
            component: "div",
            noWrap: true,
            variant: this.props.variant,
            children: this.replace_invalid(this.value, this.props.replacement)
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(UpdateIndicator, {
            name: this.props.name
          })
        })]
      })
    });
  }

}

_defineProperty(_Annunciator, "defaultProps", { ..._get(_getPrototypeOf(_Annunciator), "defaultProps", _Annunciator),
  variant: 'h3',
  replacement: "—"
});

export const Annunciator = _Annunciator.functionalize();