/* eslint-disable react-hooks/rules-of-hooks */

import { HybridEffect } from './HybridEffect.js';
import { StateSubscriber } from './StateSubscriber.js';
import { useReducer } from 'react';

export class StateSubscriberEffect extends HybridEffect {

    constructor(device_name) {
        super();

        [, this.forceUpdate] = useReducer(x => x + 1, 0);
        this.state_subscriber = new StateSubscriber(this.variable_name(device_name));
    }

    variable_name(name) {
        return name.replace(/[^A-Za-z0-9_]/g, "_");
    }

    state_listener = () => {
        if (this.forceUpdate !== undefined) {
            this.forceUpdate();
        }
    }

    run() {
        this.state_subscriber.on('update', this.state_listener);
    }

    cleanup() {
        this.state_subscriber.removeListener('update', this.state_listener);
    }
}

export default StateSubscriberEffect;
