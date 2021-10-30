"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoMJPEG = void 0;

var _react = require("react");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _util = require("util");

var _core = _interopRequireWildcard(require("@homeserver-js-gui/core"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var VideoMJPEG = /*#__PURE__*/function (_HybridComponent) {
  _inherits(VideoMJPEG, _HybridComponent);

  var _super = _createSuper(VideoMJPEG);

  function VideoMJPEG(props) {
    var _this;

    _classCallCheck(this, VideoMJPEG);

    _this = _super.call(this, props);
    _this.props = props;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VideoMJPEG, [{
    key: "hooks",
    value: function hooks() {
      var _this2 = this;

      var _useState = (0, _react.useState)("video-placeholder.png");

      var _useState2 = _slicedToArray(_useState, 2);

      this.src = _useState2[0];
      this.set_src = _useState2[1];

      var _useState3 = (0, _react.useState)("placeholder");

      var _useState4 = _slicedToArray(_useState3, 2);

      this.mode = _useState4[0];
      this.set_mode = _useState4[1];
      (0, _react.useEffect)(function () {
        _this2.setVideo("placeholder");

        return function () {
          _this2.setVideo("placeholder");
        };
      }, []);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (this.mode !== "placeholder") {
        this.setVideo("placeholder");
      } else {
        console.log("setVideo('live')");
        this.setVideo("live");
      }
    }
  }, {
    key: "setVideo",
    value: function setVideo(mode) {
      var _this3 = this;

      if (mode === "placeholder") {
        this.set_src("/video-placeholder.png");
        this.set_mode("placeholder");
      } else if (mode === "live") {
        this.set_src("/spinner.gif");
        this.set_mode("spinner");
        this.imageLoader = new Image();
        this.imageLoader.src = this.props.url;

        this.imageLoader.onload = function () {
          console.log("imageLoader.onload");

          _this3.set_src(_this3.props.url);

          _this3.set_mode("live");
        };

        this.imageLoader.onerror = function () {
          _this3.setVideo("placeholder");
        };
      }
    }
  }, {
    key: "debug_data",
    value: function debug_data() {
      return /*#__PURE__*/React.createElement("div", null, "this is ", (0, _util.inspect)(this), /*#__PURE__*/React.createElement("br", null), "props are ", (0, _util.inspect)(this.props));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.debug ? this.debug_data() : "", /*#__PURE__*/React.createElement(_Grid.default, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1
      }, /*#__PURE__*/React.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/React.createElement(_Typography.default, {
        component: "div"
      }, this.props.name)), /*#__PURE__*/React.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/React.createElement("img", {
        src: this.src,
        alt: "Camera",
        width: this.props.width,
        onClick: this.handleClick
      })), /*#__PURE__*/React.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 4
        }
      }, /*#__PURE__*/React.createElement("a", {
        href: this.props.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, " ", this.props.url)))));
    }
  }]);

  return VideoMJPEG;
}(_core.HybridComponent);

exports.VideoMJPEG = VideoMJPEG;

_defineProperty(VideoMJPEG, "defaultProps", {
  broker: _core.default.mqtt_broker_url,
  topic: _core.default.mqtt_command_topic,
  qos: 0,
  debug: false
});

var _default = VideoMJPEG.functionalize();

exports.default = _default;