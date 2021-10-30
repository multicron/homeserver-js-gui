"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HybridEffect = /*#__PURE__*/function () {
  function HybridEffect() {
    _classCallCheck(this, HybridEffect);
  }

  _createClass(HybridEffect, [{
    key: "run",
    value: function run() {// Override this method with your hook's main code
    }
  }, {
    key: "cleanup",
    value: function cleanup(props) {// Override this method with your hook's cleanup code
    }
  }, {
    key: "hook",
    value: function hook() {
      var _this = this;

      return function () {
        _this.run();

        return function () {
          return _this.cleanup();
        };
      };
    }
  }, {
    key: "dependencies",
    value: function dependencies() {
      return undefined;
    }
  }]);

  return HybridEffect;
}();

exports.default = HybridEffect;