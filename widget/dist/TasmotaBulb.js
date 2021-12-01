import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { ToggleSwitch } from '@homeserver-js-gui/widget';
import { Slider } from '@homeserver-js-gui/widget';
import { Configuration } from './Configuration.js';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export class TasmotaBulb extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return /*#__PURE__*/_jsxs(Grid, {
      container: true,
      direction: "column",
      justify: "space-evenly",
      alignItems: "stretch",
      children: [/*#__PURE__*/_jsx(Grid, {
        item: true,
        children: /*#__PURE__*/_jsx(Box, {
          p: 1,
          children: /*#__PURE__*/_jsx(ToggleSwitch, {
            name: this.props.name,
            broker: this.props.broker,
            topic: this.props.topic,
            field: "power",
            true_value: this.props.true_value,
            false_value: this.props.false_value
          })
        })
      }), /*#__PURE__*/_jsx(Grid, {
        item: true,
        children: /*#__PURE__*/_jsxs(Box, {
          p: 1,
          children: [/*#__PURE__*/_jsx(Slider, {
            name: this.props.name,
            caption: "Brightness",
            field: "dimmer",
            min: 0,
            max: 100,
            step: 5
          }), /*#__PURE__*/_jsx("br", {})]
        })
      }), /*#__PURE__*/_jsx(Grid, {
        item: true,
        children: /*#__PURE__*/_jsxs(Box, {
          p: 1,
          children: [/*#__PURE__*/_jsx(Slider, {
            name: this.props.name,
            caption: "Color Temperature",
            field: "color_temperature",
            min: 2000,
            max: 5000,
            step: 100,
            value: 3500
          }), " ", /*#__PURE__*/_jsx("br", {})]
        })
      })]
    });
  }

}
TasmotaBulb.defaultProps = {
  broker: Configuration.mqtt_broker_url,
  topic: Configuration.mqtt_command_topic,
  qos: 0,
  retain: false,
  dup: false,
  true_value: "true",
  false_value: "false",
  color: "primary",
  debug: false
};
export default TasmotaBulb;