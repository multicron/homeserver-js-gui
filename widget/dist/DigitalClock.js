import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "---"
    };
    this.set_time();
    this.interval = undefined;
  }

  set_time() {
    const locale = this.props.locale ? this.props.locale : [];
    const hour12 = this.props.hour12 == false ? false : true;
    let hour, minute, second;

    if (this.props.format) {
      switch (this.props.format.toLowerCase()) {
        case 'hh':
          hour = '2-digit';
          break;

        case 'hh-mm':
          hour = '2-digit';
          minute = '2-digit';
          break;

        case 'hh-mm-ss':
          hour = '2-digit';
          minute = '2-digit';
          second = '2-digit';
          break;

        default:
          hour = '2-digit';
          minute = '2-digit';
          second = '2-digit';
      }
    }

    let time = new Date().toLocaleTimeString(locale, {
      'hour12': hour12,
      'hour': hour,
      'minute': minute,
      'second': second
    });
    this.setState({
      time: time
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.set_time();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
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
      variant: "h3"
    }, this.state.time))));
  }

}

export default Clock;