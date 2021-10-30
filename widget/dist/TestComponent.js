import React from 'react';
import Switch from '@material-ui/core/Switch';
import { StateSubscriber } from 'StateSubscriber';
import { connect } from 'react-redux';
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("pre", null, JSON.stringify(this.state), JSON.stringify(this.state_subscriber.store), JSON.stringify(this.props)), /*#__PURE__*/React.createElement(Switch, {
      checked: this.props.checked
    }));
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


const ReduxTestComponent = connect(mapStateToProps)(TestComponent);
export default ReduxTestComponent;