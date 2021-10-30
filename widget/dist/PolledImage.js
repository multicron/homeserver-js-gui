"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.__PolledImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactRedux = require("react-redux");

var _util = require("util");

var _core = _interopRequireDefault(require("@homeserver-js-gui/core"));

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

var __PolledImage = /*#__PURE__*/function (_React$Component) {
  _inherits(__PolledImage, _React$Component);

  var _super = _createSuper(__PolledImage);

  function __PolledImage(props) {
    var _this;

    _classCallCheck(this, __PolledImage);

    _this = _super.call(this, props);
    _this.props = props;
    _this.state = {
      src: "/video-placeholder.png",
      isPlaceholder: true
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleLoad = _this.handleLoad.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(__PolledImage, [{
    key: "handleClick",
    value: function handleClick() {
      this.setVideo(this.state.isPlaceholder);
    }
  }, {
    key: "uniqueURL",
    value: function uniqueURL() {
      if (this.props.uniquify) {
        return this.props.url + "".concat(this.props.uniquify, "r=").concat(Math.random());
      } else {
        return this.props.url;
      }
    }
  }, {
    key: "setVideo",
    value: function setVideo(shown) {
      if (shown) {
        this.setState({
          src: this.uniqueURL(),
          isPlaceholder: false,
          startedLoading: Date.now()
        });
      } else {
        this.setState({
          src: "/video-placeholder.png",
          isPlaceholder: true
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setVideo(false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setVideo(false);
    }
  }, {
    key: "handleLoad",
    value: function handleLoad(event) {
      var _this2 = this;

      console.log("loaded", event);

      if (!this.state.isPlaceholder) {
        var loadTime = Date.now() - this.state.startedLoading;

        if (this.props.mininterval && loadTime < this.props.mininterval) {
          setTimeout(function () {
            return _this2.setVideo(true);
          }, this.props.mininterval - loadTime);
        } else {
          this.setVideo(true);
        }
      }
    }
  }, {
    key: "variable_name",
    value: function variable_name() {
      return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }
  }, {
    key: "debug_data",
    value: function debug_data() {
      return /*#__PURE__*/_react.default.createElement("div", null, "local state is ", (0, _util.inspect)(this.state), /*#__PURE__*/_react.default.createElement("br", null), "props are ", (0, _util.inspect)(this.props));
    }
  }, {
    key: "legend",
    value: function legend() {
      return this.props.unknown ? "Unknown" : this.props.checked ? "On" : "Off";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.debug ? this.debug_data() : "", /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: this.state.src,
        width: this.props.width,
        onClick: this.handleClick,
        onLoad: this.handleLoad
      })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          padding: 4
        }
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: this.props.url,
        target: "_blank"
      }, " ", this.props.url)))));
    }
  }]);

  return __PolledImage;
}(_react.default.Component);

exports.__PolledImage = __PolledImage;

function mapStateToProps(state, ownProps) {
  var name = ownProps.name;
  var field = ownProps.field;
  var key = name.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    checked: state[key] ? !!state[key][field] : false,
    unknown: state[key] === undefined
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

var PolledImage = (0, _reactRedux.connect)(mapStateToProps)(__PolledImage);
PolledImage.defaultProps = {
  broker: _core.default.mqtt_broker_url,
  topic: _core.default.mqtt_command_topic,
  qos: 0,
  debug: false,
  uniquify: "?",
  mininterval: 0
};
var _default = PolledImage;
exports.default = _default;