'use strict';

// import logger from "debug"; const debug = logger('homeserver:configuration');

import config from "C:\Users\Eric\Documents\VSCode\myhome-gui\etc\homeserver_js_gui_config.js";

export class Configuration {

    static singleton;

    constructor() {
        if (Configuration.singleton) {
            return Configuration.singleton;
        }

        Object.assign(this, config);

        Configuration.singleton = this;
    }
}

const configuration = new Configuration();

export { configuration };



