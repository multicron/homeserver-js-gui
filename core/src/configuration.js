'use strict';

// import logger from "debug"; const debug = logger('homeserver:Configuration');

import config from "C:\Users\Eric\Documents\VSCode\myhome-gui\etc\homeserver_js_gui_config.js";

class ConfigurationSingleton {

    static singleton;

    constructor() {
        if (Configuration.singleton) {
            return Configuration.singleton;
        }

        Object.assign(this, config);

        Configuration.singleton = this;
    }
}

const Configuration = new ConfigurationSingleton();

export { Configuration };



