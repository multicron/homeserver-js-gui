import React from 'react';
import { Annunciator } from '@homeserver-js-gui/widget';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { inspect } from 'util';
export class PingAnnunciator extends Annunciator {
  static defaultProps = {
    ...super.defaultProps,
    field: "reachable"
  };

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
export default PingAnnunciator.functionalize();