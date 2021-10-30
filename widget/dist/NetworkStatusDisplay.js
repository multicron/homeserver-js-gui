import React from 'react';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { connect } from 'react-redux';
import { inspect } from 'util';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { jsxFragment } from '@babel/types';

class __NetworkStatusDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state_subscriber = new StateSubscriber("Network_Status");
    this.state_subscriber.on('update', () => this.setState({}));
  }

  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  render() {
    let item = this.variable_name();
    let status = this.state_subscriber.get().status || {};
    let data = status[this.props.mac] || {};
    let arp = data.arp || {};
    let dhcp = data.dhcp || {};
    let wifi = data.wifi || {};
    let wifi_fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Uptime"), /*#__PURE__*/React.createElement("td", null, wifi.uptime)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "TX/RX Rate"), /*#__PURE__*/React.createElement("td", null, wifi.tx_rate, "/", wifi.rx_rate)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Type"), /*#__PURE__*/React.createElement("td", null, wifi.info)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Signal/Noise"), /*#__PURE__*/React.createElement("td", null, wifi.signal, "dB/", wifi.noise, "dB")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Quality"), /*#__PURE__*/React.createElement("td", null, Math.floor(wifi.quality / 10), "%")));
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
    }, this.props.name)), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "subtitle2",
      component: "div"
    }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Hostname"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "http://" + (dhcp.hostname || arp.hostname) + (this.props.port ? ":" + this.props.port : ""),
      target: "_blank"
    }, dhcp.hostname || arp.hostname))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "IP Address"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "http://" + (dhcp.ip || arp.ip) + (this.props.port ? ":" + this.props.port : ""),
      target: "_blank"
    }, dhcp.ip || arp.ip))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "MAC Address"), /*#__PURE__*/React.createElement("td", null, this.props.mac)), wifi.mac ? wifi_fragment : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Not Online"))))))));
  }

}

const NetworkStatusDisplay = connect()(__NetworkStatusDisplay);
NetworkStatusDisplay.defaultProps = {};
export default NetworkStatusDisplay;