import React from 'react';
import Switch from '@material-ui/core/Switch';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { connect } from 'react-redux';
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state_subscriber = new StateSubscriber(this.name); // this.state = { date: new Date() };
    // this.state_subscriber.on('update', () => this.stateUpdated());
    // setInterval(this.setState({ date: new Date() }), 1000);
  }

  handleChange() {
    console.log("this.handleChange");
  }

  render() {
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("pre", {
        children: [JSON.stringify(this.state), JSON.stringify(this.state_subscriber.store), JSON.stringify(this.props)]
      }), /*#__PURE__*/_jsx(Switch, {
        checked: this.props.checked
      })]
    });
  }

}

function mapStateToProps(state) {
  console.log(state);
  return {
    checked: state.Eric_Reading_Light ? state.Eric_Reading_Light.power : false,
    myprop: state.power
  };
} // function mapDispatchToProps(dispatch) {
//     return {
//         onChange: handleChange()
//     };
// }


export const ReduxTestComponent = connect(mapStateToProps)(TestComponent);
export default ReduxTestComponent;