/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { _Annunciator } from '@homeserver-js-gui/widget';
import { useSelector } from 'react-redux';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
const fields = {
  temperature: ["Temperature", "°F"],
  wind_chill: ["Wind Chill", "°F"],
  dew_point: ["Dew Point", "°F"],
  humidity: ["Relative Humidity", "%"],
  wind_speed: ["Wind Speed", " MPH"],
  wind_gust: ["Wind Gust", " MPH"],
  air_pressure: ["Air Pressure", " inHg"],
  observation_time_local: ["Timestamp", ""]
};

class _WeatherAnnunciator extends _Annunciator {
  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  hooks(props) {
    super.hooks(props);
    let key = this.variable_name();
    this.value = {};
    Object.keys(fields).forEach(field => {
      this.value[field] = useSelector(state_store => state_store[key] ? state_store[key][field] : null);
    });
  }

  render() {
    let rows = [];
    Object.keys(fields).forEach(fieldname => {
      rows.push( /*#__PURE__*/_jsxs("tr", {
        children: [/*#__PURE__*/_jsx("td", {
          children: fields[fieldname][0]
        }), /*#__PURE__*/_jsx("td", {
          align: "right",
          children: /*#__PURE__*/_jsxs("b", {
            children: [this.value[fieldname], fields[fieldname][1]]
          })
        })]
      }, fieldname));
    });
    return /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsxs(Grid, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1,
        children: [/*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Typography, {
            component: "div",
            children: this.props.title
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx("table", {
            width: "100%",
            children: /*#__PURE__*/_jsx("tbody", {
              children: rows
            })
          })
        })]
      })
    });
  }

}

export const WeatherAnnunciator = _WeatherAnnunciator.functionalize();