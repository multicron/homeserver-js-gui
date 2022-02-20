'use strict';

// import logger from "debug"; const debug = logger('homeserver:Configuration');

console.log("REACT_APP_HOMESERVER_JS_GUI_CONFIG", process.env.REACT_APP_HOMESERVER_JS_GUI_CONFIG);

const config = require(process.env.REACT_APP_HOMESERVER_JS_GUI_CONFIG);

class ConfigurationSingleton {

    static singleton;

    constructor() {

        if (ConfigurationSingleton.singleton) {
            console.log("Singleton exists:", JSON.parse(JSON.stringify(ConfigurationSingleton.singleton)));
            return ConfigurationSingleton.singleton;
        }

        if (!config.default) {
            throw new Error(`File ${process.env.REACT_APP_HOMESERVER_JS_GUI_CONFIG} contains no default export`);
        }

        Object.assign(this, config.default);

        ConfigurationSingleton.singleton = this;
        console.log("Singleton created:", JSON.parse(JSON.stringify(ConfigurationSingleton.singleton)));

        return ConfigurationSingleton.singleton;
    };


}

export const Configuration = new ConfigurationSingleton();
