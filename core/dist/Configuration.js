'use strict'; // import logger from "debug"; const debug = logger('homeserver:Configuration');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const config_promise = import(process.env.REACT_APP_HOMESERVER_JS_GUI_CONFIG);

class ConfigurationSingleton {
  constructor() {
    if (ConfigurationSingleton.singleton) {
      return ConfigurationSingleton.singleton;
    }

    config_promise.then(config => {
      Object.assign(this, config);
    });
    ConfigurationSingleton.singleton = this;
  }

}

_defineProperty(ConfigurationSingleton, "singleton", void 0);

export const Configuration = new ConfigurationSingleton();