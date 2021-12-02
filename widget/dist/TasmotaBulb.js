import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { ToggleSwitch } from '@homeserver-js-gui/widget';
import { Slider } from '@homeserver-js-gui/widget';
import { Configuration } from '@homeserver-js-gui/core';
export class TasmotaBulb extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return /*#__PURE__*/React.createElement(Grid, {
      container: true,
      direction: "column",
      justify: "space-evenly",
      alignItems: "stretch"
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Box, {
      p: 1
    }, /*#__PURE__*/React.createElement(ToggleSwitch, {
      name: this.props.name,
      broker: this.props.broker,
      topic: this.props.topic,
      field: "power",
      true_value: this.props.true_value,
      false_value: this.props.false_value
    }))), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Box, {
      p: 1
    }, /*#__PURE__*/React.createElement(Slider, {
      name: this.props.name,
      caption: "Brightness",
      field: "dimmer",
      min: 0,
      max: 100,
      step: 5
    }), /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Box, {
      p: 1
    }, /*#__PURE__*/React.createElement(Slider, {
      name: this.props.name,
      caption: "Color Temperature",
      field: "color_temperature",
      min: 2000,
      max: 5000,
      step: 100,
      value: 3500
    }), " ", /*#__PURE__*/React.createElement("br", null))));
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