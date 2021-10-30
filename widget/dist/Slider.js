"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slider = void 0;

var _react = _interopRequireDefault(require("react"));

var _slider = require("primereact/slider");

require("primereact/resources/themes/nova-light/theme.css");

require("primereact/resources/primereact.min.css");

require("primeicons/primeicons.css");

var _core = _interopRequireDefault(require("@homeserver-js-gui/core"));

var _widget = require("@homeserver-js-gui/widget");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Slider = /*#__PURE__*/function (_MQTTWidget) {
  _inherits(Slider, _MQTTWidget);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var value = event.value;
      var now = Date.now(); // Modify the local copy of the redux state from the server
      // TODO: this is almost certainly the wrong way to go about this!

      _this.state_subscriber.modify(_defineProperty({}, _this.props.field, value));

      if (now - _this.last_xmit > _this.props.max_update_rate) {
        var command = "".concat(_this.props.topic, "/").concat(_this.variable_name(), "/").concat(_this.props.field);
        console.log("Sending command", command, "Value", value);

        _this.send_mqtt_msg(command, value.toString());

        _this.last_xmit = now;
      } else {// console.log("Command sending throttled");
      }
    });

    _this.last_xmit = Date.now();
    return _this;
  }

  _createClass(Slider, [{
    key: "format_value",
    value: function format_value(value) {
      var val = value || 0;

      if (this.props.value_format === "time") {
        return new Date(val * 1000).toISOString().substr(11, 8);
      } else {
        return value;
      }
    }
  }, {
    key: "hooks",
    value: function hooks(props) {
      _get(_getPrototypeOf(Slider.prototype), "hooks", this).call(this, props);

      var field = props.field;
      var key = this.variable_name();
      this.value = (0, _reactRedux.useSelector)(function (state_store) {
        return state_store[key] ? state_store[key][field] : props.value;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_slider.Slider, {
        onChange: this.handleChange.bind(this),
        onSlideEnd: this.handleChange.bind(this),
        value: this.value,
        min: this.props.min,
        max: this.props.max,
        step: this.props.step
      }), /*#__PURE__*/_react.default.createElement("div", null, this.props.caption, " ", this.format_value(this.value)));
    }
  }]);

  return Slider;
}(_widget.MQTTWidget);

exports.Slider = Slider;

_defineProperty(Slider, "defaultProps", _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Slider), "defaultProps", Slider)), {}, {
  field: "dimmer",
  value: 50,
  min: 0,
  max: 100,
  step: 5,
  max_update_rate: _core.default.mqtt_max_update_rate
}));

var _default = Slider.functionalize();

exports.default = _default;