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

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _widget = _interopRequireDefault(require("@homeserver-js-gui/widget"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlipClock = /*#__PURE__*/function (_React$Component) {
  _inherits(FlipClock, _React$Component);

  var _super = _createSuper(FlipClock);

  function FlipClock(props) {
    var _this;

    _classCallCheck(this, FlipClock);

    _this = _super.call(this, props);
    _this.props = props;
    _this.state = _this.get_time();
    return _this;
  }

  _createClass(FlipClock, [{
    key: "get_time",
    value: function get_time() {
      var t = new Date();
      var hour = t.getHours();
      var min = t.getMinutes().toString().padStart(2, '0');
      var sec = t.getSeconds().toString().padStart(2, '0');
      var ampm = "";

      if (hour === 0 || hour === 24) {
        hour = 12;
        ampm = "AM";
      } else if (hour > 12) {
        hour -= 12;
        ampm = "PM";
      } // hour = hour.toString().padStart(2, ' ');


      var time = "".concat(hour, ":").concat(min, ":").concat(sec);
      return {
        time: time,
        hour: hour,
        minute: min,
        second: sec,
        ampm: ampm
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2.setState(_this2.get_time());
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        p: 5,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
      }, /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default, {
        style: {
          padding: "8px 0px"
        }
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        component: "div",
        noWrap: true,
        variant: "h3"
      }, /*#__PURE__*/_react.default.createElement(_widget.default, {
        value: this.state.hour
      }), this.props.separator, /*#__PURE__*/_react.default.createElement(_widget.default, {
        value: this.state.minute
      }), this.props.separator, /*#__PURE__*/_react.default.createElement(_widget.default, {
        value: this.state.second
      })))))));
    }
  }]);

  return FlipClock;
}(_react.default.Component);

_defineProperty(FlipClock, "defaultProps", {
  separator: ":"
});

var _default = FlipClock;
exports.default = _default;