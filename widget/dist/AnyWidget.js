"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnyWidget = AnyWidget;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _widget = _interopRequireDefault(require("@homeserver-js-gui/widget"));

var _core = _interopRequireDefault(require("@homeserver-js-gui/core"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function AnyWidget(props) {
  var key = props.name.replace(/[^A-Za-z0-9_]/g, "_");
  var device_class = (0, _reactRedux.useSelector)(function (state_store) {
    return state_store[key] ? state_store[key]._device_class : null;
  });

  switch (device_class) {
    case "Device":
      return /*#__PURE__*/_react.default.createElement(_widget.default, props);
      break;

    case "Switch":
    case "AutoOffSwitch":
    case "TasmotaOutlet":
    case "LightBulb":
    case "Relay":
    case "CompositeDevice":
      return /*#__PURE__*/_react.default.createElement(_widget.default, _extends({
        field: "power"
      }, props));
      break;

    case "BLEBeacon":
      return /*#__PURE__*/_react.default.createElement(_widget.default, _extends({
        title: "".concat(props.name, " RSSI"),
        field: "rssi"
      }, props));
      break;

    case "TasmotaPowerMeter":
      return /*#__PURE__*/_react.default.createElement(_widget.default, _extends({
        title: props.name,
        field: "watts"
      }, props));
      break;

    case "PingerTCP":
      return /*#__PURE__*/_react.default.createElement(_widget.default, _extends({
        title: props.name,
        port: ""
      }, props));
      break;

    case "Scene":
      return /*#__PURE__*/_react.default.createElement(_widget.default, _extends({
        field: "activate"
      }, props));
      break;

    case "Sound":
    case "AplaySound":
      return /*#__PURE__*/_react.default.createElement(_widget.default, _extends({
        title: "Play",
        field: "play"
      }, props));
      break;

    case "ModalSwitch":
    case "ModalSwitchWithTimeout":
      return /*#__PURE__*/_react.default.createElement(_widget.default, _extends({
        title: "Next Mode",
        field: "next_mode"
      }, props));
      break;

    case "FeitElectricBulb":
      return /*#__PURE__*/_react.default.createElement(_widget.default, props);
      break;

    case "MagicGroup":
    case "Alarm":
      return /*#__PURE__*/_react.default.createElement(_widget.default, props);
      break;

    case "WeatherUnderground":
      return /*#__PURE__*/_react.default.createElement(_widget.default, _extends({
        title: props.name
      }, props));
      break;

    case null:
      return /*#__PURE__*/_react.default.createElement(_widget.default, props);
      break;

    default:
      return /*#__PURE__*/_react.default.createElement(_widget.default, props);
      break;
  }
}

var _default = AnyWidget;
exports.default = _default;