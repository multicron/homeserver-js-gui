import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { IconSwitch } from 'Widget/IconSwitch';

class EnableButton extends IconSwitch {

    static defaultProps = {
        ...super.defaultProps,
        title: "ENABLE",
        field: "activate"
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
                        <Grid item>{this.props.name}</Grid>
                        <Grid item>
                            <Grid container spacing={1} component="div" direction="column" alignItems="center">
                                <Grid item p={5}>
                                    <Button
                                        variant={this.props.variant}
                                        size={this.props.size}
                                        onClick={(e) => this.handleChange(e, true)}
                                        color={this.props.color}
                                    >
                                        {this.props.title}
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

export default EnableButton.functionalize();
