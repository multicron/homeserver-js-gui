'use strict'; // import logger from "debug"; const debug = logger('homeserver:Configuration');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import config from "C:\\Users\\Eric\\Documents\\VSCode\\myhome-gui\\etc\\homeserver_js_gui_config.js";

class ConfigurationSingleton {
  constructor() {
    if (ConfigurationSingleton.singleton) {
      return ConfigurationSingleton.singleton;
    }

    Object.assign(this, config);
    ConfigurationSingleton.singleton = this;
  }

}

_defineProperty(ConfigurationSingleton, "singleton", void 0);

export const Configuration = new ConfigurationSingleton();