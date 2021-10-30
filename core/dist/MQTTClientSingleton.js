"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MQTTClientSingleton = void 0;

var _core = _interopRequireDefault(require("@homeserver-js-gui/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mqtt = require('mqtt');

var uuid = require('uuid');

var EventEmitter = require('events');

var debug = require('debug')('homeservergui:mqtt');

var MQTTClientSingleton = /*#__PURE__*/function (_EventEmitter) {
  _inherits(MQTTClientSingleton, _EventEmitter);

  var _super = _createSuper(MQTTClientSingleton);

  function MQTTClientSingleton() {
    var _this;

    _classCallCheck(this, MQTTClientSingleton);

    _this = _super.call(this);

    if (MQTTClientSingleton.singleton !== undefined) {
      return _possibleConstructorReturn(_this, MQTTClientSingleton.singleton);
    } else {
      MQTTClientSingleton.singleton = _assertThisInitialized(_this);
    }

    _this.setMaxListeners(1000);

    _this.qos = 0;
    _this.mqtt_client_id = "MQTTClientSingleton_" + uuid.v4();
    debug("Connecting to", _core.default.mqtt_broker_url);
    _this.mqtt_client = mqtt.connect(_core.default.mqtt_broker_url, {
      clientId: _this.mqtt_client_id,
      username: _core.default.mqtt_broker_login,
      password: _core.default.mqtt_broker_password
    });

    _this.mqtt_client.setMaxListeners(1000);

    return _this;
  }

  return MQTTClientSingleton;
}(EventEmitter);

exports.MQTTClientSingleton = MQTTClientSingleton;

_defineProperty(MQTTClientSingleton, "singleton", void 0);