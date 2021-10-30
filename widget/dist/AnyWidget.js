function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ToggleSwitch from '@homeserver-js-gui/ToggleSwitch';
import Slider from '@homeserver-js-gui/Slider';
import TextDisplay from '@homeserver-js-gui/TextDisplay';
import IconSwitch from '@homeserver-js-gui/IconSwitch';
import TasmotaBulb from '@homeserver-js-gui/TasmotaBulb';
import TasmotaExpandable from '@homeserver-js-gui/TasmotaExpandable';
import TasmotaIconExpandable from '@homeserver-js-gui/TasmotaIconExpandable';
import AutoOffSwitch from '@homeserver-js-gui/AutoOffSwitch';
import ColorPicker from '@homeserver-js-gui/ColorPicker';
import PanelItem from '@homeserver-js-gui/PanelItem';
import EnableButton from '@homeserver-js-gui/EnableButton';
import configuration from '@homeserver-js-gui/core/configuration.js';
import VideoMJPEG from '@homeserver-js-gui/VideoMJPEG';
import PolledImage from '@homeserver-js-gui/PolledImage';
import NetworkStatusDisplay from '@homeserver-js-gui/NetworkStatusDisplay';
import PingAnnunciator from '@homeserver-js-gui/PingAnnunciator';
import StateDisplay from '@homeserver-js-gui/StateDisplay';
import Annunciator from '@homeserver-js-gui/Annunciator';
import WeatherAnnunciator from '@homeserver-js-gui/WeatherAnnunciator';
import PlaceHolder from '@homeserver-js-gui/PlaceHolder';
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