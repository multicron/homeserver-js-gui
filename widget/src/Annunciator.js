/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { HybridComponent } from '@homeserver-js-gui/core';
import { useSelector } from 'react-redux';
import { UpdateIndicator } from '@homeserver-js-gui/widget';

export class _Annunciator extends HybridComponent {

    static defaultProps = {
        ...super.defaultProps,
        variant: 'h3',
        replacement: "—",
    }

    constructor(props) {
        super(props);
    }

    replace_invalid(value, replacement) {
        if (value === undefined) return replacement;
        if (value === null) return replacement;
        if (value !== value) return replacement;
        return value;
    }

    hooks(props) {
        super.hooks(props);

        let field = props.field;
        let key = this.props.name;

        this.value = useSelector(state_store => (state_store[key] ? state_store[key][field] : null));
    }

    render() {
        return (
            <>
                <Grid component="label" container alignItems="center" direction="column" spacing={1}>
                    <Grid item>
                        <Typography component="div">
                            {this.props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component="div" noWrap variant={this.props.variant}>
                            {this.replace_invalid(this.value, this.props.replacement)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <UpdateIndicator name={this.props.name} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export const Annunciator = _Annunciator.functionalize();
