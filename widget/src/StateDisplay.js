/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { inspect } from 'util';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { HybridComponent } from 'HybridComponent';
import { useSelector, shallowEqual } from 'react-redux'

export class StateDisplay extends HybridComponent {

    constructor(props) {
        super(props);
    }

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
                            {this.props.name}<br />
                            {new Date().toISOString()}
                        </Typography>
                    </Grid>
                    <Grid item zeroMinWidth component="pre" style={{ whiteSpace: "pre-wrap", margin: '5px' }}>
                        {inspect(this.device_state)}
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default StateDisplay.functionalize();