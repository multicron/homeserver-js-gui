import React from 'react';
import { _Annunciator } from '@homeserver-js-gui/widget';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export class _PingAnnunciator extends _Annunciator {

    static defaultProps = {
        ...super.defaultProps,
        field: "reachable"
    }

    render() {
        return (
            <>
                <Grid component="label" container alignItems="center" direction="column" spacing={1}>
                    <Grid item>
                        <Typography component="div" style={{ textAlign: "center" }}>
                            <a target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: this.value ? "green" : "red",
                                    "textDecoration": "none"
                                }}
                                href={`http://${this.props.title}:${this.props.port}/`}>
                                {this.props.comment}
                                <br />
                                {this.props.name}
                                <br />
                                {this.props.ip}{this.props.port === "80" ? "" : `:${this.props.port}`}
                            </a>
                        </Typography>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export const PingAnnunciator = _PingAnnunciator.functionalize();
