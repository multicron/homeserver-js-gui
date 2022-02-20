function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react-hooks/rules-of-hooks */
import { Component } from 'react';
import { withRouter } from 'react-router';
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
export class __IdleTimeoutLink extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.timer_reset = this.timer_reset.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.timer_reset);
    document.addEventListener('mousemove', this.timer_reset);
    document.addEventListener('keydown', this.timer_reset);
    document.addEventListener('click', this.timer_reset);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.timer_reset);
    document.removeEventListener('mousemove', this.timer_reset);
    document.removeEventListener('keydown', this.timer_reset);
    document.removeEventListener('click', this.timer_reset);
  }

  timer_reset(event) {
    clearTimeout(this.handle);
    this.handle = setTimeout(() => this.timer_expired(), this.props.timeout);
  }

  timer_expired() {
    if (this.props.location.pathname !== this.props.to) {
      this.props.history.push(this.props.to);
    }
  }

  render() {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: this.props.children
    });
  }

}

_defineProperty(__IdleTimeoutLink, "defaultProps", {
  timeout: 60000,
  to: "/"
});

export const IdleTimeoutLink = withRouter(__IdleTimeoutLink);
export default IdleTimeoutLink;