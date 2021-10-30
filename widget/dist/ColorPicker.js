"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = _interopRequireWildcard(require("@homeserver-js-gui/core"));

var _reactRedux = require("react-redux");

var _colorpicker = require("primereact/colorpicker");

require("primereact/resources/themes/nova-light/theme.css");

require("primereact/resources/primereact.min.css");

require("primeicons/primeicons.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var __ColorPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(__ColorPicker, _React$Component);

  var _super = _createSuper(__ColorPicker);

  function __ColorPicker(props) {
    var _this;

    _classCallCheck(this, __ColorPicker);

    _this = _super.call(this, props);
    _this.props = props;
    _this.last_xmit = new Date();
    _this.client = new _core.MQTTClientSingleton().mqtt_client;
    return _this;
  }

  _createClass(__ColorPicker, [{
    key: "mqttSend",
    value: function mqttSend(topic, value) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var options = {
          qos: _this2.props.qos,
          retain: _this2.props.retain,
          dup: _this2.props.dup
        };

        _this2.client.publish(topic, value, options);

        console.log("Sent MQTT Message");
        resolve(1);
      });
    }
  }, {
    key: "send_mqtt_msg",
    value: function () {
      var _send_mqtt_msg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(topic, message) {
        var answer;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.mqttSend(topic, message);

              case 2:
                answer = _context.sent;
                console.log("Result from mqttSend:", answer);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function send_mqtt_msg(_x, _x2) {
        return _send_mqtt_msg.apply(this, arguments);
      }

      return send_mqtt_msg;
    }()
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var value = event.value;
      var now = new Date();

      if (now.getTime() - this.last_xmit.getTime() > this.props.max_update_rate) {
        var command = "".concat(this.props.topic, "/").concat(this.variable_name(), "/").concat(this.props.field);
        console.log("Sending command", command, "Value", value);
        this.send_mqtt_msg(command, value.toString());
        this.last_xmit = now;
      }
    }
  }, {
    key: "variable_name",
    value: function variable_name() {
      return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_colorpicker.ColorPicker, {
        inline: true,
        onChange: this.handleChange.bind(this)
      }), /*#__PURE__*/_react.default.createElement("div", null, this.props.caption, " ", this.props.value));
    }
  }]);

  return __ColorPicker;
}(_react.default.Component);

function mapStateToProps(state, ownProps) {
  var name = ownProps.name;
  var field = ownProps.field;
  var key = name.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    value: state[key] ? state[key][field] : ownProps.value,
    unknown: state[key] === undefined
  };
}

var ColorPicker = (0, _reactRedux.connect)(mapStateToProps)(__ColorPicker);
ColorPicker.defaultProps = {
  broker: _core.default.mqtt_broker_url,
  topic: _core.default.mqtt_command_topic,
  field: "color",
  qos: 0,
  retain: false,
  dup: false,
  true_value: "true",
  false_value: "false",
  color: "primary",
  debug: false,
  value: "#FF00FF",
  min: 0,
  max: 100,
  step: 5,
  max_update_rate: 250
};
var _default = ColorPicker;
exports.default = _default;