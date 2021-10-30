'use strict'; // import logger from "debug"; const debug = logger('homeserver:configuration');

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configuration = exports.Configuration = void 0;

var _configuration = _interopRequireDefault(require("../../../src/configuration.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Configuration = function Configuration() {
  _classCallCheck(this, Configuration);

  if (Configuration.singleton) {
    return Configuration.singleton;
  }

  Object.assign(this, _configuration.default);
  Configuration.singleton = this;
};

exports.Configuration = Configuration;

_defineProperty(Configuration, "singleton", void 0);

var configuration = new Configuration();
exports.configuration = configuration;