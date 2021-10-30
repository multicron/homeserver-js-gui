function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ToggleSwitch from 'Widget/ToggleSwitch';
import Slider from 'Widget/Slider';
import TextDisplay from 'Widget/TextDisplay';
import IconSwitch from 'Widget/IconSwitch';
import TasmotaBulb from 'Widget/TasmotaBulb';
import TasmotaExpandable from 'Widget/TasmotaExpandable';
import TasmotaIconExpandable from 'Widget/TasmotaIconExpandable';
import AutoOffSwitch from 'Widget/AutoOffSwitch';
import ColorPicker from 'Widget/ColorPicker';
import PanelItem from 'Widget/PanelItem';
import EnableButton from 'Widget/EnableButton';
import configuration from '@homeserver-js-gui/core/configuration.js';
import VideoMJPEG from 'Widget/VideoMJPEG';
import PolledImage from 'Widget/PolledImage';
import NetworkStatusDisplay from 'Widget/NetworkStatusDisplay';
import PingAnnunciator from 'Widget/PingAnnunciator';
import StateDisplay from 'Widget/StateDisplay';
import Annunciator from 'Widget/Annunciator';
import WeatherAnnunciator from 'Widget/WeatherAnnunciator';
import PlaceHolder from 'Widget/PlaceHolder';
import { useSelector } from 'react-redux';
export function AnyWidget(props) {
  const key = props.name.replace(/[^A-Za-z0-9_]/g, "_");
  const device_class = useSelector(state_store => state_store[key] ? state_store[key]._device_class : null);

  switch (device_class) {
    case "Device":
      return /*#__PURE__*/React.createElement(StateDisplay, props);
      break;

    case "Switch":
    case "AutoOffSwitch":
    case "TasmotaOutlet":
    case "LightBulb":
    case "Relay":
    case "CompositeDevice":
      return /*#__PURE__*/React.createElement(ToggleSwitch, _extends({
        field: "power"
      }, props));
      break;

    case "BLEBeacon":
      return /*#__PURE__*/React.createElement(Annunciator, _extends({
        title: `${props.name} RSSI`,
        field: "rssi"
      }, props));
      break;

    case "TasmotaPowerMeter":
      return /*#__PURE__*/React.createElement(Annunciator, _extends({
        title: props.name,
        field: "watts"
      }, props));
      break;

    case "PingerTCP":
      return /*#__PURE__*/React.createElement(PingAnnunciator, _extends({
        title: props.name,
        port: ""
      }, props));
      break;

    case "Scene":
      return /*#__PURE__*/React.createElement(EnableButton, _extends({
        field: "activate"
      }, props));
      break;

    case "Sound":
    case "AplaySound":
      return /*#__PURE__*/React.createElement(EnableButton, _extends({
        title: "Play",
        field: "play"
      }, props));
      break;

    case "ModalSwitch":
    case "ModalSwitchWithTimeout":
      return /*#__PURE__*/React.createElement(EnableButton, _extends({
        title: "Next Mode",
        field: "next_mode"
      }, props));
      break;

    case "FeitElectricBulb":
      return /*#__PURE__*/React.createElement(TasmotaExpandable, props);
      break;

    case "MagicGroup":
    case "Alarm":
      return /*#__PURE__*/React.createElement(IconSwitch, props);
      break;

    case "WeatherUnderground":
      return /*#__PURE__*/React.createElement(WeatherAnnunciator, _extends({
        title: props.name
      }, props));
      break;

    case null:
      return /*#__PURE__*/React.createElement(PlaceHolder, props);
      break;

    default:
      return /*#__PURE__*/React.createElement(StateDisplay, props);
      break;
  }
}
export default AnyWidget;