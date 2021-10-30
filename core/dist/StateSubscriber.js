'use strict';

import { createStore } from 'redux';
import { configuration } from '@homeserver-js-gui/core';
import { MQTTClientSingleton } from '@homeserver-js-gui/core';
import { StateHolder } from '@homeserver-js-gui/core';
import { StateReceiverSingleton } from '@homeserver-js-gui/core';

const debug_state = require('debug')('homeservergui:state');

const mqtt = require('mqtt');

const uuid = require('uuid');

const EventEmitter = require('events');

const fs = require('fs');

export class StateSubscriber extends StateHolder {
  constructor(name) {
    super(name);
    this.state_receiver_singleton = new StateReceiverSingleton();
    this.state_receiver_singleton.on('update_any', message => this.receive_dispatch(message));
  }

  receive_dispatch(message) {
    let action = JSON.parse(message);

    if (action.payload.device_name === this.name) {
      this.emit('update', message);
    }
  }

}