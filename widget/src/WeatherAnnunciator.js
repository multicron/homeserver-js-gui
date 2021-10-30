/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { _Annunciator } from '@homeserver-js-gui/widget';
import { useSelector } from 'react-redux';

const fields = {
    temperature: ["Temperature", "°F"],
    wind_chill: ["Wind Chill", "°F"],
    dew_point: ["Dew Point", "°F"],
    humidity: ["Relative Humidity", "%"],
    wind_speed: ["Wind Speed", " MPH"],
    wind_gust: ["Wind Gust", " MPH"],
    air_pressure: ["Air Pressure", " inHg"],
    observation_time_local: ["Timestamp", ""],
};

class _WeatherAnnunciator extends _Annunciator {

    variable_name() {
        return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }

    hooks(props) {
        super.hooks(props);

        let key = this.variable_name();

        this.value = {};

        Object.keys(fields).forEach((field) => {
            this.value[field] = useSelector(state_store => (state_store[key] ? state_store[key][field] : null));
        });
    }


    render() {
        let rows = [];

        Object.keys(fields).forEach((fieldname) => {
            rows.push(<tr key={fieldname}>
                <td>{fields[fieldname][0]}</td>
                <td align="right"><b>{this.value[fieldname]}{fields[fieldname][1]}</b></td>
            </tr >
            );
        });

        return (
            <>
                <Grid component="label" container alignItems="center" direction="column" spacing={1}>
                    <Grid item>
                        <Typography component="div">
                            {this.props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <table width="100%">
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export const WeatherAnnunciator = _WeatherAnnunciator.functionalize();

