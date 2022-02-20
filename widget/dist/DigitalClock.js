import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "---"
    };
    this.set_time();
    this.interval = undefined;
  }

  set_time() {
    const locale = this.props.locale ? this.props.locale : [];
    const hour12 = this.props.hour12 == false ? false : true;
    let hour, minute, second;

    if (this.props.format) {
      switch (this.props.format.toLowerCase()) {
        case 'hh':
          hour = '2-digit';
          break;

        case 'hh-mm':
          hour = '2-digit';
          minute = '2-digit';
          break;

        case 'hh-mm-ss':
          hour = '2-digit';
          minute = '2-digit';
          second = '2-digit';
          break;

        default:
          hour = '2-digit';
          minute = '2-digit';
          second = '2-digit';
      }
    }

    let time = new Date().toLocaleTimeString(locale, {
      'hour12': hour12,
      'hour': hour,
      'minute': minute,
      'second': second
    });
    this.setState({
      time: time
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.set_time();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
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
            variant: "h3",
            children: this.state.time
          })
        })]
      })
    });
  }

}

export default Clock;