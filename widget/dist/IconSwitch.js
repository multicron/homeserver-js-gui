import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ToggleSwitch } from '@homeserver-js-gui/ToggleSwitch';
export class IconSwitch extends ToggleSwitch {
  static defaultProps = {
    ...super.defaultProps,
    size: "small",
    variant: "outlined"
  }; // handleChange needs to get "this" lexically

  handleChange = (event, value) => {
    let command = `${this.props.topic}/${this.variable_name()}/${this.props.field}`;
    console.log("Sending command", command, "value", value);
    this.send_mqtt_msg(command, value ? this.props.true_value : this.props.false_value);
  };

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.debug ? this.debug_data() : "", /*#__PURE__*/React.createElement(Typography, {
      component: "div"
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
      component: "div",
      alignItems: "center",
      spacing: 1
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Button, {
      variant: this.props.variant,
      size: this.props.size,
      onClick: e => this.handleChange(e, true),
      color: this.props.color
    }, "ON")), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Button, {
      variant: this.props.variant,
      size: this.props.size,
      onClick: e => this.handleChange(e, false),
      color: this.props.color
    }, "OFF")))))));
  }

}
export default IconSwitch.functionalize();