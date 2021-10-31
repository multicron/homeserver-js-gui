function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react-hooks/rules-of-hooks */
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContents from '@material-ui/core/Card';
import { HybridComponent } from '@homeserver-js-gui/core';
import { jsx as _jsx } from "react/jsx-runtime";
export class _PanelItem extends HybridComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const classes = _PanelItem.useStyles();

    if (this.props.noCard) {
      return /*#__PURE__*/_jsx(Grid, {
        item: true,
        p: 5,
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 2,
        children: this.props.children
      });
    } else {
      return /*#__PURE__*/_jsx(Grid, {
        item: true,
        p: 5,
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 2,
        children: /*#__PURE__*/_jsx(Card, {
          className: classes.card,
          children: /*#__PURE__*/_jsx(CardContents, {
            style: {
              padding: "8px 0px"
            },
            children: this.props.children
          })
        })
      });
    }
  }

}

_defineProperty(_PanelItem, "useStyles", makeStyles(theme => ({
  card: {
    minWidth: 200
  }
})));

export const PanelItem = _PanelItem.functionalize();