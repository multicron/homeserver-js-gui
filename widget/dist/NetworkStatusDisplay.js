import React from 'react';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { connect } from 'react-redux';
import { inspect } from 'util';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { jsxFragment } from '@babel/types';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

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

    let wifi_fragment = /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("tr", {
        children: [/*#__PURE__*/_jsx("td", {
          children: "Uptime"
        }), /*#__PURE__*/_jsx("td", {
          children: wifi.uptime
        })]
      }), /*#__PURE__*/_jsxs("tr", {
        children: [/*#__PURE__*/_jsx("td", {
          children: "TX/RX Rate"
        }), /*#__PURE__*/_jsxs("td", {
          children: [wifi.tx_rate, "/", wifi.rx_rate]
        })]
      }), /*#__PURE__*/_jsxs("tr", {
        children: [/*#__PURE__*/_jsx("td", {
          children: "Type"
        }), /*#__PURE__*/_jsx("td", {
          children: wifi.info
        })]
      }), /*#__PURE__*/_jsxs("tr", {
        children: [/*#__PURE__*/_jsx("td", {
          children: "Signal/Noise"
        }), /*#__PURE__*/_jsxs("td", {
          children: [wifi.signal, "dB/", wifi.noise, "dB"]
        })]
      }), /*#__PURE__*/_jsxs("tr", {
        children: [/*#__PURE__*/_jsx("td", {
          children: "Quality"
        }), /*#__PURE__*/_jsxs("td", {
          children: [Math.floor(wifi.quality / 10), "%"]
        })]
      })]
    });

    return /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsxs(Grid, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1,
        children: [/*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Typography, {
            component: "div",
            children: this.props.name
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "subtitle2",
            component: "div",
            children: /*#__PURE__*/_jsx("table", {
              children: /*#__PURE__*/_jsxs("tbody", {
                children: [/*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("td", {
                    children: "Hostname"
                  }), /*#__PURE__*/_jsx("td", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "http://" + (dhcp.hostname || arp.hostname) + (this.props.port ? ":" + this.props.port : ""),
                      target: "_blank",
                      children: dhcp.hostname || arp.hostname
                    })
                  })]
                }), /*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("td", {
                    children: "IP Address"
                  }), /*#__PURE__*/_jsx("td", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "http://" + (dhcp.ip || arp.ip) + (this.props.port ? ":" + this.props.port : ""),
                      target: "_blank",
                      children: dhcp.ip || arp.ip
                    })
                  })]
                }), /*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("td", {
                    children: "MAC Address"
                  }), /*#__PURE__*/_jsx("td", {
                    children: this.props.mac
                  })]
                }), wifi.mac ? wifi_fragment : /*#__PURE__*/_jsx("tr", {
                  children: /*#__PURE__*/_jsx("td", {
                    children: "Not Online"
                  })
                })]
              })
            })
          })
        })]
      })
    });
  }

}

export const NetworkStatusDisplay = connect()(__NetworkStatusDisplay);
NetworkStatusDisplay.defaultProps = {};
export default NetworkStatusDisplay;