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

var _reactRedux = require("react-redux");

var _util = require("util");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _core = _interopRequireWildcard(require("@homeserver-js-gui/core"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var __AutoOffSwitch = /*#__PURE__*/function (_React$Component) {
  _inherits(__AutoOffSwitch, _React$Component);

  var _super = _createSuper(__AutoOffSwitch);

  function __AutoOffSwitch(props) {
    var _this;

    _classCallCheck(this, __AutoOffSwitch);

    _this = _super.call(this, props);
    _this.props = props;
    _this.stateholder = new _core.StateSubscriber();
    return _this;
  }

  _createClass(__AutoOffSwitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.setState({
          time: Date.now()
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var now = Date.now();
      var start_time = this.props.start_time || now;
      var seconds_since_start = Math.floor((now - this.props.start_time + this.stateholder.server_time_offset) / 1000);
      var seconds_left = this.props.timeout - seconds_since_start; //        console.log("Seconds left", seconds_left);

      var time_left_string = new Date(seconds_left * 1000).toISOString().substr(11, 8);
      return /*#__PURE__*/_react.default.createElement(_Card.default, null, " ", /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        direction: "column",
        justify: "space-evenly",
        alignItems: "stretch"
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        p: 1
      }, /*#__PURE__*/_react.default.createElement(_widget.default, {
        name: this.props.name,
        broker: this.props.broker,
        topic: this.props.topic,
        field: "power",
        true_value: this.props.true_value,
        false_value: this.props.false_value
      })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_widget.default, {
        name: this.props.name,
        caption: "Time",
        value_format: "time",
        field: "timeout",
        min: 0,
        max: 2 * 60 * 60,
        step: 5
      }), /*#__PURE__*/_react.default.createElement("br", null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Box.default, null, "Time Left: ", this.props.start_time ? time_left_string : "Off")))));
    }
  }]);

  return __AutoOffSwitch;
}(_react.default.Component);

function mapStateToProps(state, ownProps) {
  var name = ownProps.name;
  var field = ownProps.field;
  var key = name.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    checked: state[key] ? !!state[key][field] : false,
    start_time: state[key] ? state[key]['start_time'] : null,
    timeout: state[key] ? state[key]['timeout'] : null
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

var AutoOffSwitch = (0, _reactRedux.connect)(mapStateToProps)(__AutoOffSwitch);
AutoOffSwitch.defaultProps = {
  broker: _core.default.mqtt_broker_url,
  topic: _core.default.mqtt_command_topic,
  qos: 0,
  retain: false,
  dup: false,
  true_value: "true",
  false_value: "false",
  color: "primary",
  debug: false,
  field: "power"
};
var _default = AutoOffSwitch;
exports.default = _default;