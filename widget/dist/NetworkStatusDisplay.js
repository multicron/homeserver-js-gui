"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@homeserver-js-gui/core");

var _reactRedux = require("react-redux");

var _util = require("util");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _types = require("@babel/types");

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

var __NetworkStatusDisplay = /*#__PURE__*/function (_React$Component) {
  _inherits(__NetworkStatusDisplay, _React$Component);

  var _super = _createSuper(__NetworkStatusDisplay);

  function __NetworkStatusDisplay(props) {
    var _this;

    _classCallCheck(this, __NetworkStatusDisplay);

    _this = _super.call(this, props);
    _this.props = props;
    _this.state_subscriber = new _core.StateSubscriber("Network_Status");

    _this.state_subscriber.on('update', function () {
      return _this.setState({});
    });

    return _this;
  }

  _createClass(__NetworkStatusDisplay, [{
    key: "variable_name",
    value: function variable_name() {
      return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.variable_name();
      var status = this.state_subscriber.get().status || {};
      var data = status[this.props.mac] || {};
      var arp = data.arp || {};
      var dhcp = data.dhcp || {};
      var wifi = data.wifi || {};

      var wifi_fragment = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Uptime"), /*#__PURE__*/_react.default.createElement("td", null, wifi.uptime)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "TX/RX Rate"), /*#__PURE__*/_react.default.createElement("td", null, wifi.tx_rate, "/", wifi.rx_rate)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Type"), /*#__PURE__*/_react.default.createElement("td", null, wifi.info)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Signal/Noise"), /*#__PURE__*/_react.default.createElement("td", null, wifi.signal, "dB/", wifi.noise, "dB")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Quality"), /*#__PURE__*/_react.default.createElement("td", null, Math.floor(wifi.quality / 10), "%")));

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        component: "div"
      }, this.props.name)), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "subtitle2",
        component: "div"
      }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Hostname"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "http://" + (dhcp.hostname || arp.hostname) + (this.props.port ? ":" + this.props.port : ""),
        target: "_blank"
      }, dhcp.hostname || arp.hostname))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "IP Address"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "http://" + (dhcp.ip || arp.ip) + (this.props.port ? ":" + this.props.port : ""),
        target: "_blank"
      }, dhcp.ip || arp.ip))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "MAC Address"), /*#__PURE__*/_react.default.createElement("td", null, this.props.mac)), wifi.mac ? wifi_fragment : /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Not Online"))))))));
    }
  }]);

  return __NetworkStatusDisplay;
}(_react.default.Component);

var NetworkStatusDisplay = (0, _reactRedux.connect)()(__NetworkStatusDisplay);
NetworkStatusDisplay.defaultProps = {};
var _default = NetworkStatusDisplay;
exports.default = _default;