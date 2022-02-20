import React from 'react';
import { Switch } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ToggleSwitch } from '@homeserver-js-gui/widget';
import { Slider } from '@homeserver-js-gui/widget';
import { StateDisplay } from '@homeserver-js-gui/widget';
import { IconSwitch } from '@homeserver-js-gui/widget';
import { connect } from 'react-redux';
import { inspect } from 'util';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Configuration } from '@homeserver-js-gui/core';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

class __AutoOffSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.stateholder = new StateSubscriber();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      time: Date.now()
    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let now = Date.now();
    let start_time = this.props.start_time || now;
    let seconds_since_start = Math.floor((now - this.props.start_time + this.stateholder.server_time_offset) / 1000);
    let seconds_left = this.props.timeout - seconds_since_start; //        console.log("Seconds left", seconds_left);

    let time_left_string = new Date(seconds_left * 1000).toISOString().substr(11, 8);
    return /*#__PURE__*/_jsxs(Card, {
      children: [" ", /*#__PURE__*/_jsx(CardContent, {
        children: /*#__PURE__*/_jsxs(Grid, {
          container: true,
          direction: "column",
          justify: "space-evenly",
          alignItems: "stretch",
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            p: 1,
            children: /*#__PURE__*/_jsx(ToggleSwitch, {
              name: this.props.name,
              broker: this.props.broker,
              topic: this.props.topic,
              field: "power",
              true_value: this.props.true_value,
              false_value: this.props.false_value
            })
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            children: /*#__PURE__*/_jsxs(Box, {
              children: [/*#__PURE__*/_jsx(Slider, {
                name: this.props.name,
                caption: "Time",
                value_format: "time",
                field: "timeout",
                min: 0,
                max: 2 * 60 * 60,
                step: 5
              }), /*#__PURE__*/_jsx("br", {})]
            })
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            children: /*#__PURE__*/_jsxs(Box, {
              children: ["Time Left: ", this.props.start_time ? time_left_string : "Off"]
            })
          })]
        })
      })]
    });
  }

}

function mapStateToProps(state, ownProps) {
  let name = ownProps.name;
  let field = ownProps.field;
  let key = name.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    checked: state[key] ? !!state[key][field] : false,
    start_time: state[key] ? state[key]['start_time'] : null,
    timeout: state[key] ? state[key]['timeout'] : null
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const AutoOffSwitch = connect(mapStateToProps)(__AutoOffSwitch);
AutoOffSwitch.defaultProps = {
  broker: Configuration.mqtt_broker_url,
  topic: Configuration.mqtt_command_topic,
  qos: 0,
  retain: false,
  dup: false,
  true_value: "true",
  false_value: "false",
  color: "primary",
  debug: false,
  field: "power"
};
export default AutoOffSwitch;