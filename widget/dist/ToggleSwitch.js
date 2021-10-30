/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { MQTTWidget } from '@homeserver-js-gui/widget';
import { useSelector } from 'react-redux';
import logger from "debug";
const debug = logger('homeservergui:toggleswitch');
export class ToggleSwitch extends MQTTWidget {
  static defaultProps = { ...super.defaultProps,
    field: "power",
    true_value: "true",
    false_value: "false",
    checked: false,
    debug: false
  }; // handleChange needs to get "this" lexically

  handleChange = event => {
    debug("checked", event.target.checked);
    let command = `${this.props.topic}/${this.variable_name()}/${this.props.field}`;
    debug("Sending command", command, "for", this.variable_name());
    this.send_mqtt_msg(command, event.target.checked ? this.props.true_value : this.props.false_value);
  };

  hooks(props) {
    super.hooks(props);
    let field = props.field;
    let key = this.variable_name();
    this.checked = useSelector(state_store => state_store[key] ? !!state_store[key][field] : false);
  }

  render(props) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.debug ? this.debug_data() : "", /*#__PURE__*/React.createElement(Grid, {
      component: "label",
      container: true,
      alignItems: "center",
      direction: "column",
      spacing: 1
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Typography, {
      component: "div"
    }, this.props.name)), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: this.checked,
      onChange: this.handleChange,
      color: this.props.color
    }))));
  }

}
export default ToggleSwitch.functionalize();