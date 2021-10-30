'use strict'; // import logger from "debug"; const debug = logger('homeserver:configuration');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import config from "../../../../src/configuration.js";
export class Configuration {
  constructor() {
    if (Configuration.singleton) {
      return Configuration.singleton;
    }

    Object.assign(this, config);
    Configuration.singleton = this;
  }

}

_defineProperty(Configuration, "singleton", void 0);

const configuration = new Configuration();
export { configuration };