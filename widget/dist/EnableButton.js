import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { IconSwitch } from '@homeserver-js-gui/widget';

class EnableButton extends IconSwitch {
  static defaultProps = {
    ...super.defaultProps,
    title: "ENABLE",
    field: "activate"
  };

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
    }, this.props.name), /*#__PURE__*/React.createElement(Grid, {
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
      color: this.props.color
    }, this.props.title)))), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }))));
  }

}

export default EnableButton.functionalize();