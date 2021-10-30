"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PanelItem = void 0;

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _types = require("@babel/types");

var _core = require("@homeserver-js-gui/core");

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

var PanelItem = /*#__PURE__*/function (_HybridComponent) {
  _inherits(PanelItem, _HybridComponent);

  var _super = _createSuper(PanelItem);

  function PanelItem(props) {
    var _this;

    _classCallCheck(this, PanelItem);

    _this = _super.call(this, props);
    _this.props = props;
    return _this;
  }

  _createClass(PanelItem, [{
    key: "render",
    value: function render() {
      var classes = PanelItem.useStyles();

      if (this.props.noCard) {
        return /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          p: 5,
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          xl: 2
        }, this.props.children);
      } else {
        return /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          p: 5,
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          xl: 2
        }, /*#__PURE__*/_react.default.createElement(_Card.default, {
          className: classes.card
        }, /*#__PURE__*/_react.default.createElement(_Card.default, {
          style: {
            padding: "8px 0px"
          }
        }, this.props.children)));
      }
    }
  }]);

  return PanelItem;
}(_core.HybridComponent);

exports.PanelItem = PanelItem;

_defineProperty(PanelItem, "useStyles", (0, _styles.makeStyles)(function (theme) {
  return {
    card: {
      minWidth: 200
    }
  };
}));

var _default = PanelItem.functionalize();

exports.default = _default;