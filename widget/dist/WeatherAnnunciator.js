/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Annunciator } from '@homeserver-js-gui/Annunciator';
import { useSelector } from 'react-redux';
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

class WeatherAnnunciator extends Annunciator {
  constructor(props) {
    super(props);
  }

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
      rows.push( /*#__PURE__*/React.createElement("tr", {
        key: fieldname
      }, /*#__PURE__*/React.createElement("td", null, fields[fieldname][0]), /*#__PURE__*/React.createElement("td", {
        align: "right"
      }, /*#__PURE__*/React.createElement("b", null, this.value[fieldname], fields[fieldname][1]))));
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
      component: "label",
      container: true,
      alignItems: "center",
      direction: "column",
      spacing: 1
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Typography, {
      component: "div"
    }, this.props.title)), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement("table", {
      width: "100%"
    }, /*#__PURE__*/React.createElement("tbody", null, rows)))));
  }

}

export default WeatherAnnunciator.functionalize();