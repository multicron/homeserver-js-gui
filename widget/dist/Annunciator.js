"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Annunciator = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _core = require("@homeserver-js-gui/core");

var _reactRedux = require("react-redux");

var _widget = _interopRequireDefault(require("@homeserver-js-gui/widget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Annunciator = /*#__PURE__*/function (_HybridComponent) {
  _inherits(Annunciator, _HybridComponent);

  var _super = _createSuper(Annunciator);

  function Annunciator(props) {
    _classCallCheck(this, Annunciator);

    return _super.call(this, props);
  }

  _createClass(Annunciator, [{
    key: "variable_name",
    value: function variable_name() {
      return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }
  }, {
    key: "replace_invalid",
    value: function replace_invalid(value, replacement) {
      if (value === undefined) return replacement;
      if (value === null) return replacement;
      if (value !== value) return replacement;
      return value;
    }
  }, {
    key: "hooks",
    value: function hooks(props) {
      _get(_getPrototypeOf(Annunciator.prototype), "hooks", this).call(this, props);

      var field = props.field;
      var key = this.variable_name();
      this.value = (0, _reactRedux.useSelector)(function (state_store) {
        return state_store[key] ? state_store[key][field] : null;
      });
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
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        component: "div"
      }, this.props.title)), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        component: "div",
        noWrap: true,
        variant: this.props.variant
      }, this.replace_invalid(this.value, this.props.replacement))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_widget.default, {
        name: this.props.name
      }))));
    }
  }]);

  return Annunciator;
}(_core.HybridComponent);

exports.Annunciator = Annunciator;

_defineProperty(Annunciator, "defaultProps", _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Annunciator), "defaultProps", Annunciator)), {}, {
  variant: 'h3',
  replacement: "—"
}));

var _default = Annunciator.functionalize();

exports.default = _default;