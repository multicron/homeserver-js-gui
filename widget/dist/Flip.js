"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _flip = _interopRequireDefault(require("@pqina/flip"));

var _flipMin = _interopRequireDefault(require("@pqina/flip/dist/flip.min.css"));

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

var Flip = /*#__PURE__*/function (_React$Component) {
  _inherits(Flip, _React$Component);

  var _super = _createSuper(Flip);

  function Flip(props) {
    var _this;

    _classCallCheck(this, Flip);

    _this = _super.call(this, props);
    _this._tickRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(Flip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._tickInstance = _flip.default.DOM.create(this._tickRef.current, {
        value: this.props.value
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this._tickInstance) return;
      this._tickInstance.value = this.props.value;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this._tickInstance) return;

      _flip.default.DOM.destroy(this._tickRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("span", {
        ref: this._tickRef,
        className: _flipMin.default.tick
      }, /*#__PURE__*/_react.default.createElement("span", {
        "data-repeat": "true",
        "aria-hidden": "true"
      }, /*#__PURE__*/_react.default.createElement("span", {
        "data-view": "flip"
      }, "Tick")));
    }
  }]);

  return Flip;
}(_react.default.Component);

exports.default = Flip;