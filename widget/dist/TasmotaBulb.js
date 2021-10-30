"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _widget = _interopRequireDefault(require("@homeserver-js-gui/widget"));

var _core = _interopRequireDefault(require("@homeserver-js-gui/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TasmotaBulb = /*#__PURE__*/function (_React$Component) {
  _inherits(TasmotaBulb, _React$Component);

  var _super = _createSuper(TasmotaBulb);

  function TasmotaBulb(props) {
    var _this;

    _classCallCheck(this, TasmotaBulb);

    _this = _super.call(this, props);
    _this.props = props;
    return _this;
  }

  _createClass(TasmotaBulb, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        direction: "column",
        justify: "space-evenly",
        alignItems: "stretch"
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        p: 1
      }, /*#__PURE__*/_react.default.createElement(_widget.default, {
        name: this.props.name,
        broker: this.props.broker,
        topic: this.props.topic,
        field: "power",
        true_value: this.props.true_value,
        false_value: this.props.false_value
      }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        p: 1
      }, /*#__PURE__*/_react.default.createElement(_widget.default, {
        name: this.props.name,
        caption: "Brightness",
        field: "dimmer",
        min: 0,
        max: 100,
        step: 5
      }), /*#__PURE__*/_react.default.createElement("br", null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        p: 1
      }, /*#__PURE__*/_react.default.createElement(_widget.default, {
        name: this.props.name,
        caption: "Color Temperature",
        field: "color_temperature",
        min: 2000,
        max: 5000,
        step: 100,
        value: 3500
      }), " ", /*#__PURE__*/_react.default.createElement("br", null))));
    }
  }]);

  return TasmotaBulb;
}(_react.default.Component);

exports.default = TasmotaBulb;
TasmotaBulb.defaultProps = {
  broker: _core.default.mqtt_broker_url,
  topic: _core.default.mqtt_command_topic,
  qos: 0,
  retain: false,
  dup: false,
  true_value: "true",
  false_value: "false",
  color: "primary",
  debug: false
};