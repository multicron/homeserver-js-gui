import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { _IconSwitch } from '@homeserver-js-gui/widget';

export class _EnableButton extends _IconSwitch {

    static defaultProps = {
        ...super.defaultProps,
        field: "activate",
        size: "large"
    }

    render() {
        return (
            <>
                {this.props.debug ? this.debug_data() : ""}
                <Typography component="span">
                    <Grid
                        container component="div"
                        alignItems="center"
                        direction="column"
                        spacing={1}
                        justify="space-evenly"
                    >
                        <Grid item>&nbsp;</Grid>
                        <Grid item>
                            <Grid container spacing={1} component="div" direction="column" alignItems="center">
                                <Grid item p={5}>
                                    <Button
                                        variant={this.props.variant}
                                        size={this.props.size}
                                        onClick={(e) => this.handleChange(e, true)}
                                        color={this.props.color}
                                        style={{ textTransform: 'none' }}>
                                        {this.props.name}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                </Typography>
            </>
        );
    }
}

export const EnableButton = _EnableButton.functionalize();
