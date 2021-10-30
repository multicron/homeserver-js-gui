/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { HybridComponent } from '@homeserver-js-gui/core/HybridComponent';
import { useSelector } from 'react-redux';
import UpdateIndicator from '@homeserver-js-gui/widget/UpdateIndicator';
export class Annunciator extends HybridComponent {
  static defaultProps = { ...super.defaultProps,
    variant: 'h3',
    replacement: "—"
  };

  constructor(props) {
    super(props);
  }

  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  replace_invalid(value, replacement) {
    if (value === undefined) return replacement;
    if (value === null) return replacement;
    if (value !== value) return replacement;
    return value;
  }

  hooks(props) {
    super.hooks(props);
    let field = props.field;
    let key = this.variable_name();
    this.value = useSelector(state_store => state_store[key] ? state_store[key][field] : null);
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
      component: "div"
    }, this.props.title)), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Typography, {
      component: "div",
      noWrap: true,
      variant: this.props.variant
    }, this.replace_invalid(this.value, this.props.replacement))), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(UpdateIndicator, {
      name: this.props.name
    }))));
  }

}
export default Annunciator.functionalize();