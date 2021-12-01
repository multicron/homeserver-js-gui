
'use strict';

import { StateHolder } from './StateHolder.js';
import { StateReceiverSingleton } from './StateReceiverSingleton.js';

const debug_state = require('debug')('homeservergui:state');

export class StateSubscriber extends StateHolder {
    constructor(name) {
        super(name);

        this.state_receiver_singleton = new StateReceiverSingleton();

        this.state_receiver_singleton.on('update_any', (message) => this.receive_dispatch(message));
    }

    receive_dispatch(message) {
        let action = JSON.parse(message);

        if (action.payload.device_name === this.name) {
            this.emit('update', message);
        }
    }
}

