function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { connect } from 'react-redux';
import { inspect } from 'util';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { jsxFragment } from '@babel/types';
import Card from '@material-ui/core/Card';
import CardContents from '@material-ui/core/Card';
import { Flip } from '@homeserver-js-gui/widget';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this.get_time();
  }

  get_time() {
    let t = new Date();
    let hour = t.getHours();
    let min = t.getMinutes().toString().padStart(2, '0');
    let sec = t.getSeconds().toString().padStart(2, '0');
    let ampm = "";

    if (hour === 0 || hour === 24) {
      hour = 12;
      ampm = "AM";
    } else if (hour > 12) {
      hour -= 12;
      ampm = "PM";
    } // hour = hour.toString().padStart(2, ' ');


    let time = `${hour}:${min}:${sec}`;
    return {
      time: time,
      hour: hour,
      minute: min,
      second: sec,
      ampm: ampm
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(this.get_time());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

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
          p: 5,
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          xl: 12,
          children: /*#__PURE__*/_jsx(Card, {
            children: /*#__PURE__*/_jsx(CardContents, {
              style: {
                padding: "8px 0px"
              },
              children: /*#__PURE__*/_jsxs(Typography, {
                component: "div",
                noWrap: true,
                variant: "h3",
                children: [/*#__PURE__*/_jsx(Flip, {
                  value: this.state.hour
                }), this.props.separator, /*#__PURE__*/_jsx(Flip, {
                  value: this.state.minute
                }), this.props.separator, /*#__PURE__*/_jsx(Flip, {
                  value: this.state.second
                })]
              })
            })
          })
        })
      })
    });
  }

}

_defineProperty(FlipClock, "defaultProps", {
  separator: ":"
});

export default FlipClock;