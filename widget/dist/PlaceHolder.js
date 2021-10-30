/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { inspect } from 'util';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { HybridComponent } from 'HybridComponent';
import { useSelector, shallowEqual } from 'react-redux';
import UpdateIndicator from 'Widget/UpdateIndicator';
export class PlaceHolder extends HybridComponent {
  constructor(props) {
    super(props);
  }

  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  hooks(props) {
    super.hooks(props);
    let key = this.variable_name();
    this.device_state = useSelector(state_store => state_store[key], shallowEqual);
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      component: "label",
      spacing: 2,
      direction: "column"
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Typography, {
      component: "div",
      align: "center"
    }, this.props.name)), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      align: "center"
    }, "Loading... ", /*#__PURE__*/React.createElement(UpdateIndicator, {
      name: this.props.name
    }))));
  }

}
export default PlaceHolder.functionalize();