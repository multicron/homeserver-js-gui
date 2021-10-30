"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HybridComponent = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// In order to subclass this class, you import the
// named export, e.g., import { HybridComponent } from 'HybridComponent.js'.
// This will give you a class that you can extend.
// If you use the default export, you get the functional component.
// E.g., import HybridComponent from 'HybridComponent.js';
var HybridComponent = /*#__PURE__*/function () {
  function HybridComponent(props) {
    _classCallCheck(this, HybridComponent);

    this.props = props;
  } // React itself will instantiate this object, or its subclass,
  // on its first use.
  // useRef takes care of making sure there is a separate
  // "this" returned for each occurence of the component on the page.


  _createClass(HybridComponent, [{
    key: "hooks",
    value: function hooks() {// Override this method with all your hook invocations
      // this.classes = useStyles();
      // this.history = useHistory();
      // this.theme = useTheme();
    }
  }, {
    key: "render",
    value: function render(props) {
      // Override this method with your render.  It is passed props,
      // but the value passed is also in this.props when this is called.
      // return (<div>Hello World!</div>);
      return null;
    } // This static method is called when react renders this "functional" component.

  }], [{
    key: "instantiate",
    value: function instantiate(props) {
      var _this = this;

      var ref = (0, _react.useRef)(null);

      if (ref.current === null) {
        ref.current = new this(props);
      }

      return ref.current;

      var _useState = (0, _react.useState)(function () {
        return new _this(props);
      }),
          _useState2 = _slicedToArray(_useState, 1),
          object = _useState2[0];

      return object;
    }
  }, {
    key: "_render",
    value: function _render(props) {
      var instance = this.instantiate(props);
      instance.props = props;
      instance.hooks(props);
      return instance.render(props);
    }
  }, {
    key: "functionalize",
    value: function functionalize() {
      var functional_component = this._render.bind(this); // React expects the defaultProps to be a property of the exported
      // function, not a static property of this class.


      if (this.defaultProps !== undefined) {
        functional_component.defaultProps = this.defaultProps;
      }

      if (this.propTypes !== undefined) {
        functional_component.propTypes = this.propTypes;
      }

      if (this.displayName !== undefined) {
        functional_component.displayName = this.displayName;
      }

      return functional_component;
    }
  }]);

  return HybridComponent;
}();

exports.HybridComponent = HybridComponent;