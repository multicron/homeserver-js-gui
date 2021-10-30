"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StateReceiverSingleton = void 0;

var _core = _interopRequireWildcard(require("@homeserver-js-gui/core"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var debug = require('debug')('homeservergui:state');

var StateReceiverSingleton = /*#__PURE__*/function (_StateHolder) {
  _inherits(StateReceiverSingleton, _StateHolder);

  var _super = _createSuper(StateReceiverSingleton);

  function StateReceiverSingleton(name) {
    var _this;

    _classCallCheck(this, StateReceiverSingleton);

    _this = _super.call(this, name);

    if (StateReceiverSingleton.singleton !== undefined) {
      return _possibleConstructorReturn(_this, StateReceiverSingleton.singleton);
    } else {
      StateReceiverSingleton.singleton = _assertThisInitialized(_this);
    }

    _this.mqtt_client = new _core.MQTTClientSingleton().mqtt_client;

    _this.mqtt_client.on('message', function (topic, message) {
      debug("StateReceiverSingleton Received ".concat(topic, " ").concat(message.toString()));

      _this.receive_mqtt_msg(topic, message.toString());
    });

    _this.mqtt_client.on('connect', function () {
      debug("MQTT Connect");

      _this.subscribe_state_store();

      _this.request_state_store();

      _this.subscribe_topic();

      _this.emit('connect');
    });

    return _this;
  }

  _createClass(StateReceiverSingleton, [{
    key: "subscribe_state_store",
    value: function subscribe_state_store() {
      if (this.mqtt_is_subscribed_to_state_store) return;
      this.mqtt_client.subscribe(this.state_store_topic, {
        qos: this.qos
      }, function (err) {
        if (err) {
          debug("Error subscribing to state store: ".concat(err));
        }
      });
      this.mqtt_is_subscribed_to_state_store = true;
      debug("Subscribed to state store", this.state_store_topic);
    }
  }, {
    key: "subscribe_topic",
    value: function subscribe_topic() {
      this.mqtt_client.subscribe(this.dispatch_topic, {
        qos: this.qos
      }, function (err) {
        if (err) {
          debug("Error subscribing to dispatch topic: ".concat(err));
        }
      });
      debug("Subscribed to topic", this.dispatch_topic);
    }
  }, {
    key: "request_state_store",
    value: function request_state_store() {
      var _this2 = this;

      var options = {
        qos: 0,
        retain: false,
        dup: false
      };
      this.mqtt_client.publish(this.request_state_store_topic, "", options, function () {
        debug("Sent state store request to ".concat(_this2.request_state_store_topic));

        _this2.subscribe_state_store();
      });
    }
  }, {
    key: "receive_mqtt_msg",
    value: function receive_mqtt_msg(topic, message) {
      // Check if it is a state store update or a dispatch (action) update
      // debug("StateReceiver Receiving", topic);
      if (topic === this.dispatch_topic) {
        this.receive_dispatch(message);
      } else if (topic === this.state_store_topic) {
        this.receive_state_store(message);
      }
    }
  }, {
    key: "receive_state_store",
    value: function receive_state_store(message) {
      if (this.mqtt_is_subscribed_to_state_store) {
        debug("StateReceiver Unsubscribing from state store topic");
        this.mqtt_client.unsubscribe(this.state_store_topic);
        this.mqtt_is_subscribed_to_state_store = false;
      }

      this.replace(message);
      this.emit('replace');
    }
  }, {
    key: "receive_dispatch",
    value: function receive_dispatch(message) {
      var action = JSON.parse(message); // Add this offset to times on the client to get time on the server

      this.server_time_offset = action.timestamp ? action.timestamp - Date.now() : 0; // debug(`server_time_offset is ${this.server_time_offset}`);
      // debug("Store is now:", this.store.getState());

      this.store.dispatch(action); // debug("Received update for", action.payload.device_name);

      this.emit('update_any', message);
    }
  }]);

  return StateReceiverSingleton;
}(_core.default);

exports.StateReceiverSingleton = StateReceiverSingleton;

_defineProperty(StateReceiverSingleton, "singleton", void 0);