"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MQTTWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = _interopRequireWildcard(require("@homeserver-js-gui/core"));

var _util = require("util");

var _debug = _interopRequireDefault(require("debug"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var debug = (0, _debug.default)('homeservergui:mqttwidget');

var MQTTWidget = /*#__PURE__*/function (_HybridComponent) {
  _inherits(MQTTWidget, _HybridComponent);

  var _super = _createSuper(MQTTWidget);

  function MQTTWidget(props) {
    var _this;

    _classCallCheck(this, MQTTWidget);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onConnect", function () {
      debug("state_subscriber connect for ", _this.variable_name());
    });

    _defineProperty(_assertThisInitialized(_this), "onReplace", function () {
      debug("state_subscriber replace for ", _this.variable_name());
    });

    _defineProperty(_assertThisInitialized(_this), "onUpdate", function (message) {// debug("state_subscriber update for ", this.variable_name(), message);
    });

    _this.props = props; // This call also makes sure we are subscribed to the mqtt topic for
    // updates to the redux state for this device:

    _this.state_subscriber = new _core.StateSubscriber(_this.variable_name());
    _this.client = _this.state_subscriber.mqtt_client;

    _this.state_subscriber.on('connect', _this.onConnect);

    _this.state_subscriber.on('replace', _this.onReplace);

    _this.state_subscriber.on('update', _this.onUpdate);

    return _this;
  }

  _createClass(MQTTWidget, [{
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

        debug("Sent MQTT Message");
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
    key: "variable_name",
    value: function variable_name() {
      return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }
  }, {
    key: "debug_data",
    value: function debug_data() {
      return /*#__PURE__*/_react.default.createElement("div", null, "State: ", (0, _util.inspect)(this.state_subscriber.get()), /*#__PURE__*/_react.default.createElement("br", null), "Props: ", (0, _util.inspect)(this.props));
    }
  }, {
    key: "hooks",
    value: function hooks(props) {
      _get(_getPrototypeOf(MQTTWidget.prototype), "hooks", this).call(this, props);
    }
  }, {
    key: "render",
    value: function render(props) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.debug ? this.debug_data() : "", "MQTTWidget");
    }
  }]);

  return MQTTWidget;
}(_core.HybridComponent);

exports.MQTTWidget = MQTTWidget;

_defineProperty(MQTTWidget, "defaultProps", {
  broker: _core.default.mqtt_broker_url,
  topic: _core.default.mqtt_command_topic,
  field: "power",
  qos: 0,
  retain: false,
  dup: false,
  color: "primary",
  debug: false
});

var _default = MQTTWidget.functionalize();

exports.default = _default;