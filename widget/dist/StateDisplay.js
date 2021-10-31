/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { inspect } from 'util';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { HybridComponent } from '@homeserver-js-gui/core';
import { useSelector, shallowEqual } from 'react-redux';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export class _StateDisplay extends HybridComponent {
  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  hooks(props) {
    super.hooks(props);
    let key = this.variable_name();
    this.device_state = useSelector(state_store => state_store[key], shallowEqual);
  }

  render() {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsxs(Grid, {
        container: true,
        component: "label",
        spacing: 2,
        direction: "column",
        children: [/*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsxs(Typography, {
            component: "div",
            align: "center",
            children: [this.props.name, /*#__PURE__*/_jsx("br", {}), new Date().toISOString()]
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          zeroMinWidth: true,
          component: "pre",
          style: {
            whiteSpace: "pre-wrap",
            margin: '5px'
          },
          children: inspect(this.device_state)
        })]
      })
    });
  }

}
export const StateDisplay = _StateDisplay.functionalize();