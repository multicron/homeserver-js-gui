'use strict';

// import logger from "debug"; const debug = logger('homeserver:Configuration');

const config_promise = import(process.env.REACT_APP_HOMESERVER_JS_GUI_CONFIG);

class ConfigurationSingleton {

    static singleton;

    constructor() {
        if (ConfigurationSingleton.singleton) {
            return ConfigurationSingleton.singleton;
        }

        config_promise.then((config) => {
            Object.assign(this, config);
        });

        ConfigurationSingleton.singleton = this;
    }
}

export const Configuration = new ConfigurationSingleton();
