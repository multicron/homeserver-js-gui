'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.REPLACE_STORE = exports.MODIFY_DEVICE = exports.ADD_DEVICE = void 0;

var _redux = require("redux");

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

var mqtt = require('mqtt');

var uuid = require('uuid');

var EventEmitter = require('events');

var fs = require('fs'); // The global Redux store is a singleton, but we can instantiate as
// many StateHolder objects as we want.  They all reference the one
// global_store.  They also all communicate on the same global_mqtt_client.
// How expensive is an mqtt client?  I'm thinking perhaps each switch in the UI
// could have a separate one, which would simplify this code a bit.  Perhaps it
// was a premature optimization to have it be shared among the entire web app?


var global_store = undefined;
var initial_state = {};
var ADD_DEVICE = "ADD_DEVICE";
exports.ADD_DEVICE = ADD_DEVICE;
var MODIFY_DEVICE = "MODIFY_DEVICE";
exports.MODIFY_DEVICE = MODIFY_DEVICE;
var REPLACE_STORE = "REPLACE_STORE";
exports.REPLACE_STORE = REPLACE_STORE;

function rootReducer(state, action) {
  if (state === undefined) {
    return initial_state;
  }

  if (action.type === ADD_DEVICE) {
    var payload = action.payload;
    return Object.assign({}, state, _defineProperty({}, payload.device_name, payload.device_state));
  }

  if (action.type === MODIFY_DEVICE) {
    var _payload = action.payload;
    var current_device_state = state[_payload.device_name];
    var new_device_state = Object.assign({}, current_device_state, _payload.device_state);
    return Object.assign({}, state, _defineProperty({}, _payload.device_name, new_device_state));
  }

  if (action.type === REPLACE_STORE) {
    var _payload2 = action.payload;
    return JSON.parse(_payload2);
  }

  return state;
} // TODO: Topic should include name.


var StateHolder = /*#__PURE__*/function (_EventEmitter) {
  _inherits(StateHolder, _EventEmitter);

  var _super = _createSuper(StateHolder);

  function StateHolder(name) {
    var _this;

    _classCallCheck(this, StateHolder);

    _this = _super.call(this);

    _this.setMaxListeners(1000);

    if (global_store === undefined) {
      global_store = (0, _redux.createStore)(rootReducer);
    }

    _this.store = global_store;
    _this.qos = 0;
    _this.mqtt_singleton = new _core.MQTTClientSingleton();
    _this.mqtt_client = _this.mqtt_singleton.mqtt_client;
    _this.mqtt_client_id = _this.mqtt_singleton.mqtt_client_id;
    _this.name = name;
    _this.state_store_topic = "houseserver/state";
    _this.request_state_store_topic = "houseserver/request_state_store";
    _this.dispatch_topic = "houseserver/dispatch";
    _this.uuid = uuid.v4();
    _this.server_time_offset = 0;
    return _this;
  }

  _createClass(StateHolder, [{
    key: "add",
    value: function add() {
      debug("Adding", this.name);
      var action = {
        type: ADD_DEVICE,
        timestamp: Date.now(),
        client_id: this.mqtt_client_id,
        payload: {
          device_name: this.name,
          device_state: {}
        }
      };
      this.store.dispatch(action);
      return action;
    }
  }, {
    key: "modify",
    value: function modify(state_change) {
      debug("Modifying", this.name);
      var action = {
        type: MODIFY_DEVICE,
        timestamp: Date.now(),
        client_id: this.mqtt_client_id,
        payload: {
          device_name: this.name,
          device_state: state_change
        }
      };
      debug("Action is", action);
      this.store.dispatch(action);
      return action;
    }
  }, {
    key: "replace",
    value: function replace(new_state) {
      var action = {
        timestamp: Date.now(),
        type: REPLACE_STORE,
        client_id: this.mqtt_client_id,
        payload: new_state
      };
      this.store.dispatch(action);
      return action;
    }
  }, {
    key: "get",
    value: function get() {
      var full_state = this.store.getState();
      return full_state[this.name] || {};
      return Object.assign({}, full_state[this.name] || {});
    }
  }, {
    key: "get_state_store",
    value: function get_state_store() {
      return this.store.getState();
    }
  }]);

  return StateHolder;
}(EventEmitter);

exports.default = StateHolder;