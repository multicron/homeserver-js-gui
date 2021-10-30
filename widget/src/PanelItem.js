/* eslint-disable react-hooks/rules-of-hooks */

import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContents from '@material-ui/core/Card';
import { HybridComponent } from '@homeserver-js-gui/core';

export class _PanelItem extends HybridComponent {

    static useStyles = makeStyles(theme => ({
        card: {
            minWidth: 200,
        },
    }));

    constructor(props) {
        super(props);

        this.props = props;


    }

    render() {
        const classes = _PanelItem.useStyles();

        if (this.props.noCard) {
            return (
                <Grid item p={5} xs={12} sm={6} md={4} lg={3} xl={2}>
                    {this.props.children}
                </Grid>
            );
        }
        else {
            return (
                <Grid item p={5} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card className={classes.card}><CardContents style={{ padding: "8px 0px" }}>
                        {this.props.children}
                    </CardContents></Card>
                </Grid>
            );
        }
    }
}

export const PanelItem = _PanelItem.functionalize();
