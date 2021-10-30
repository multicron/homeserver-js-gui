"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _widget = require("@homeserver-js-gui/widget");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var fields = {
  temperature: ["Temperature", "°F"],
  wind_chill: ["Wind Chill", "°F"],
  dew_point: ["Dew Point", "°F"],
  humidity: ["Relative Humidity", "%"],
  wind_speed: ["Wind Speed", " MPH"],
  wind_gust: ["Wind Gust", " MPH"],
  air_pressure: ["Air Pressure", " inHg"],
  observation_time_local: ["Timestamp", ""]
};

var WeatherAnnunciator = /*#__PURE__*/function (_Annunciator) {
  _inherits(WeatherAnnunciator, _Annunciator);

  var _super = _createSuper(WeatherAnnunciator);

  function WeatherAnnunciator(props) {
    _classCallCheck(this, WeatherAnnunciator);

    return _super.call(this, props);
  }

  _createClass(WeatherAnnunciator, [{
    key: "variable_name",
    value: function variable_name() {
      return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }
  }, {
    key: "hooks",
    value: function hooks(props) {
      var _this = this;

      _get(_getPrototypeOf(WeatherAnnunciator.prototype), "hooks", this).call(this, props);

      var key = this.variable_name();
      this.value = {};
      Object.keys(fields).forEach(function (field) {
        _this.value[field] = (0, _reactRedux.useSelector)(function (state_store) {
          return state_store[key] ? state_store[key][field] : null;
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var rows = [];
      Object.keys(fields).forEach(function (fieldname) {
        rows.push( /*#__PURE__*/_react.default.createElement("tr", {
          key: fieldname
        }, /*#__PURE__*/_react.default.createElement("td", null, fields[fieldname][0]), /*#__PURE__*/_react.default.createElement("td", {
          align: "right"
        }, /*#__PURE__*/_react.default.createElement("b", null, _this2.value[fieldname], fields[fieldname][1]))));
      });
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
      }, /*#__PURE__*/_react.default.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/_react.default.createElement("tbody", null, rows)))));
    }
  }]);

  return WeatherAnnunciator;
}(_widget.Annunciator);

var _default = WeatherAnnunciator.functionalize();

exports.default = _default;