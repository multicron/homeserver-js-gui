/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { HybridComponent } from '@homeserver-js-gui/core';
import { useSelector, shallowEqual } from 'react-redux';
import { UpdateIndicator } from '@homeserver-js-gui/widget';

export class _PlaceHolder extends HybridComponent {

    variable_name() {
        return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }

    hooks(props) {
        super.hooks(props);

        let key = this.variable_name();

        this.device_state = useSelector(state_store => state_store[key], shallowEqual);
    }

    render() {
        return (
            <>
                <Grid container component="label" spacing={2} direction="column">
                    <Grid item >
                        <Typography component="div" align="center">
                            {this.props.name}
                        </Typography>
                    </Grid>
                    <Grid item align="center">
                        Loading... <UpdateIndicator name={this.props.name} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export const PlaceHolder = _PlaceHolder.functionalize();
