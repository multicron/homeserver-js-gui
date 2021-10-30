'use strict';

import { createStore } from 'redux';
import { configuration } from '@homeserver-js-gui/core';
import { MQTTClientSingleton } from '@homeserver-js-gui/core';

const debug = require('debug')('homeservergui:state');

const mqtt = require('mqtt');

const uuid = require('uuid');

const EventEmitter = require('events');

const fs = require('fs'); // The global Redux store is a singleton, but we can instantiate as
// many StateHolder objects as we want.  They all reference the one
// global_store.  They also all communicate on the same global_mqtt_client.
// How expensive is an mqtt client?  I'm thinking perhaps each switch in the UI
// could have a separate one, which would simplify this code a bit.  Perhaps it
// was a premature optimization to have it be shared among the entire web app?


let global_store = undefined;
const initial_state = {};
export const ADD_DEVICE = "ADD_DEVICE";
export const MODIFY_DEVICE = "MODIFY_DEVICE";
export const REPLACE_STORE = "REPLACE_STORE";

function rootReducer(state, action) {
  if (state === undefined) {
    return initial_state;
  }

  if (action.type === ADD_DEVICE) {
    let payload = action.payload;
    return Object.assign({}, state, {
      [payload.device_name]: payload.device_state
    });
  }

  if (action.type === MODIFY_DEVICE) {
    let payload = action.payload;
    let current_device_state = state[payload.device_name];
    let new_device_state = Object.assign({}, current_device_state, payload.device_state);
    return Object.assign({}, state, {
      [payload.device_name]: new_device_state
    });
  }

  if (action.type === REPLACE_STORE) {
    let payload = action.payload;
    return JSON.parse(payload);
  }

  return state;
} // TODO: Topic should include name.


export class StateHolder extends EventEmitter {
  constructor(name) {
    super();
    this.setMaxListeners(1000);

    if (global_store === undefined) {
      global_store = createStore(rootReducer);
    }

    this.store = global_store;
    this.qos = 0;
    this.mqtt_singleton = new MQTTClientSingleton();
    this.mqtt_client = this.mqtt_singleton.mqtt_client;
    this.mqtt_client_id = this.mqtt_singleton.mqtt_client_id;
    this.name = name;
    this.state_store_topic = "houseserver/state";
    this.request_state_store_topic = "houseserver/request_state_store";
    this.dispatch_topic = "houseserver/dispatch";
    this.uuid = uuid.v4();
    this.server_time_offset = 0;
  }

  add() {
    debug("Adding", this.name);
    let action = {
      type: ADD_DEVICE,
      timestamp: Date.now(),
      client_id: this.mqtt_client_id,
      payload: {
        device_name: this.name,
        device_state: {}
      }
    };
    this.store.dispatch(action);
    return action;
  }

  modify(state_change) {
    debug("Modifying", this.name);
    let action = {
      type: MODIFY_DEVICE,
      timestamp: Date.now(),
      client_id: this.mqtt_client_id,
      payload: {
        device_name: this.name,
        device_state: state_change
      }
    };
    debug("Action is", action);
    this.store.dispatch(action);
    return action;
  }

  replace(new_state) {
    let action = {
      timestamp: Date.now(),
      type: REPLACE_STORE,
      client_id: this.mqtt_client_id,
      payload: new_state
    };
    this.store.dispatch(action);
    return action;
  }

  get() {
    let full_state = this.store.getState();
    return full_state[this.name] || {};
    return Object.assign({}, full_state[this.name] || {});
  }

  get_state_store() {
    return this.store.getState();
  }

}
export default StateHolder;