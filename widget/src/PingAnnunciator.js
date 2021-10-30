import React from 'react';
import { Annunciator } from '@homeserver-js-gui/widget/Annunciator';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { inspect } from 'util';

export class PingAnnunciator extends Annunciator {

    static defaultProps = {
        ...super.defaultProps,
        field: "reachable"
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Grid component="label" container alignItems="center" direction="column" spacing={1}>
                    <Grid item>
                        <Typography component="div" style={{ textAlign: "center" }}>
                            <a target="_blank"
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

export default PingAnnunciator.functionalize();
