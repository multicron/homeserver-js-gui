"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TestComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _core = require("@homeserver-js-gui/core");

var _reactRedux = require("react-redux");

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

var TestComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(TestComponent, _React$Component);

  var _super = _createSuper(TestComponent);

  function TestComponent(props) {
    var _this;

    _classCallCheck(this, TestComponent);

    _this = _super.call(this, props);
    _this.state_subscriber = new _core.StateSubscriber(_this.name); // this.state = { date: new Date() };
    // this.state_subscriber.on('update', () => this.stateUpdated());
    // setInterval(this.setState({ date: new Date() }), 1000);

    return _this;
  }

  _createClass(TestComponent, [{
    key: "handleChange",
    value: function handleChange() {
      console.log("this.handleChange");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(this.state), JSON.stringify(this.state_subscriber.store), JSON.stringify(this.props)), /*#__PURE__*/_react.default.createElement(_Switch.default, {
        checked: this.props.checked
      }));
    }
  }]);

  return TestComponent;
}(_react.default.Component);

exports.TestComponent = TestComponent;

function mapStateToProps(state) {
  console.log(state);
  return {
    checked: state.Eric_Reading_Light ? state.Eric_Reading_Light.power : false,
    myprop: state.power
  };
} // function mapDispatchToProps(dispatch) {
//     return {
//         onChange: handleChange()
//     };
// }


var ReduxTestComponent = (0, _reactRedux.connect)(mapStateToProps)(TestComponent);
var _default = ReduxTestComponent;
exports.default = _default;