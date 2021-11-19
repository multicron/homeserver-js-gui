'use strict';

// import logger from "debug"; const debug = logger('homeserver:Configuration');

import config from "C:\Users\Eric\Documents\VSCode\myhome-gui\etc\homeserver_js_gui_config.js";

class ConfigurationSingleton {

    static singleton;

    constructor() {
        if (ConfigurationSingleton.singleton) {
            return ConfigurationSingleton.singleton;
        }

        Object.assign(this, config);

        ConfigurationSingleton.singleton = this;
    }
}

export const Configuration = new ConfigurationSingleton();
