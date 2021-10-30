"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.__IdleTimeoutLink = exports.IdleTimeoutLink = void 0;

var _react = require("react");

var _reactRouter = require("react-router");

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

var __IdleTimeoutLink = /*#__PURE__*/function (_Component) {
  _inherits(__IdleTimeoutLink, _Component);

  var _super = _createSuper(__IdleTimeoutLink);

  function __IdleTimeoutLink(props) {
    var _this;

    _classCallCheck(this, __IdleTimeoutLink);

    _this = _super.call(this, props);
    _this.props = props;
    _this.timer_reset = _this.timer_reset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(__IdleTimeoutLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('scroll', this.timer_reset);
      document.addEventListener('mousemove', this.timer_reset);
      document.addEventListener('keydown', this.timer_reset);
      document.addEventListener('click', this.timer_reset);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.timer_reset);
      document.removeEventListener('mousemove', this.timer_reset);
      document.removeEventListener('keydown', this.timer_reset);
      document.removeEventListener('click', this.timer_reset);
    }
  }, {
    key: "timer_reset",
    value: function timer_reset(event) {
      var _this2 = this;

      clearTimeout(this.handle);
      this.handle = setTimeout(function () {
        return _this2.timer_expired();
      }, this.props.timeout);
    }
  }, {
    key: "timer_expired",
    value: function timer_expired() {
      if (this.props.location.pathname !== this.props.to) {
        this.props.history.push(this.props.to);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children);
    }
  }]);

  return __IdleTimeoutLink;
}(_react.Component);

exports.__IdleTimeoutLink = __IdleTimeoutLink;

_defineProperty(__IdleTimeoutLink, "defaultProps", {
  timeout: 60000,
  to: "/"
});

var IdleTimeoutLink = (0, _reactRouter.withRouter)(__IdleTimeoutLink);
exports.IdleTimeoutLink = IdleTimeoutLink;
var _default = IdleTimeoutLink;
exports.default = _default;