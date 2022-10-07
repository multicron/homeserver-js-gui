import React from 'react';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { connect } from 'react-redux';
import { inspect } from 'util';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { jsxFragment } from '@babel/types';

class __NetworkStatusDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;

        this.state_subscriber = new StateSubscriber("Network_Status");
        this.state_subscriber.on('update', () => this.setState({}));
    }

    render() {
        let item = this.props.name;
        let status = this.state_subscriber.get().status || {};
        let data = status[this.props.mac] || {};
        let arp = data.arp || {};
        let dhcp = data.dhcp || {};
        let wifi = data.wifi || {};

        let wifi_fragment = <>
            <tr><td>Uptime</td><td>{wifi.uptime}</td></tr>
            <tr><td>TX/RX Rate</td><td>{wifi.tx_rate}/{wifi.rx_rate}</td></tr>
            <tr><td>Type</td><td>{wifi.info}</td></tr>
            <tr><td>Signal/Noise</td><td>{wifi.signal}dB/{wifi.noise}dB</td></tr>
            <tr><td>Quality</td><td>{Math.floor(wifi.quality / 10)}%</td></tr>
        </>;

        return (
            <>
                <Grid component="label" container alignItems="center" direction="column" spacing={1}>
                    <Grid item>
                        <Typography component="div">
                            {this.props.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" component="div">
                            <table>
                                <tbody>
                                    <tr><td>Hostname</td><td>
                                        <a href={"http://" + (dhcp.hostname || arp.hostname) + (this.props.port ? ":" + this.props.port : "")}
                                            target="_blank">
                                            {dhcp.hostname || arp.hostname}
                                        </a>
                                    </td></tr>
                                    <tr><td>IP Address</td><td>
                                        <a href={"http://" + (dhcp.ip || arp.ip) + (this.props.port ? ":" + this.props.port : "")}
                                            target="_blank">
                                            {dhcp.ip || arp.ip}
                                        </a>
                                    </td></tr>

                                    <tr><td>MAC Address</td><td>{this.props.mac}</td></tr>
                                    {wifi.mac ? wifi_fragment : <tr><td>Not Online</td></tr>}
                                </tbody>
                            </table>
                        </Typography>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export const NetworkStatusDisplay = connect()(__NetworkStatusDisplay)

NetworkStatusDisplay.defaultProps = {
}

export default NetworkStatusDisplay;
