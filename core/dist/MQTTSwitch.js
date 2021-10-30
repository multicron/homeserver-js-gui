"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _mqtt = _interopRequireDefault(require("mqtt"));

var _core = _interopRequireDefault(require("@homeserver-js-gui/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var debug = require('debug')('homeservergui:mqttswitch');

var MQTTSwitch = /*#__PURE__*/function (_React$Component) {
  _inherits(MQTTSwitch, _React$Component);

  var _super = _createSuper(MQTTSwitch);

  function MQTTSwitch(props) {
    var _this;

    _classCallCheck(this, MQTTSwitch);

    _this = _super.call(this, props);
    _this.props = props;
    _this.state = {
      power: props.power
    };
    _this.true_regexp = new RegExp('^\s*(true|1|yes|on)\s*$', 'i');
    _this.false_regexp = new RegExp('^\s*(false|0|no|off)\s*$', 'i');
    _this.client = _mqtt.default.connect(_this.props.broker);

    _this.client.on('connect', function () {
      debug("Connected to MQTT broker");
    });

    _this.client.on('error', function (theError) {
      _this.client.end();

      debug(theError.toString());
    });

    _this.client.subscribe(_this.props.topic, {
      qos: _this.props.qos
    }, function (err) {
      if (err) {
        debug("Error subscribing to topic: ".concat(err));
      }
    });

    _this.client.on('message', function (topic, message) {
      _this.receive_mqtt_msg(topic, message.toString());
    });

    return _this;
  }

  _createClass(MQTTSwitch, [{
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

        debug("Sent MQTT Message", topic, value);
        resolve(1);
      });
    }
  }, {
    key: "booleanize",
    value: function booleanize(value) {
      if (this.true_regexp.test(value)) {
        return true;
      }

      if (this.false_regexp.test(value)) {
        return false;
      }

      return null;
    }
  }, {
    key: "receive_mqtt_msg",
    value: function receive_mqtt_msg(topic, message) {
      debug("Received message \"".concat(message, "\" from topic ").concat(topic));
      this.setState({
        power: this.booleanize(message)
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
                debug("Result from mqttSend:", answer);

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
    value: function handleChange(name, event) {
      var _this3 = this;

      debug("checked", event.target.checked);
      this.setState(_defineProperty({}, name, !!event.target.checked), function () {
        _this3.send_mqtt_msg(_this3.props.topic, _this3.state.power ? _this3.props.true_value : _this3.props.false_value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Switch.default, {
        checked: this.state.power,
        onChange: this.handleChange.bind(this, 'power'),
        disabled: this.props.disabled,
        color: "primary",
        inputProps: {
          'aria-label': 'power switch'
        }
      }), this.props.topic);
    }
  }]);

  return MQTTSwitch;
}(_react.default.Component);

exports.default = MQTTSwitch;
MQTTSwitch.defaultProps = {
  broker: _core.default.mqtt_broker_url,
  topic: "tasmotas/rgb-bulb-5/cmnd/POWER",
  qos: 0,
  retain: false,
  dup: false,
  true_value: "ON",
  false_value: "OFF",
  color: "primary",
  debug: false,
  disabled: true
};