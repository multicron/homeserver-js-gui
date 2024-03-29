/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { useEffect, useReducer, useState } from 'react';
import { HybridComponent } from '@homeserver-js-gui/core';
import { StateSubscriber } from '@homeserver-js-gui/core';

export class _UpdateIndicator extends HybridComponent {

    constructor(props) {
        super(props);

        this.props = props;

        if (this.props.immediate) {
            this.last_update = new Date();
        }

    }

    state_listener = () => {
        this.last_update = new Date();
        this.force_update();
    }

    hooks() {
        [, this.force_update] = useReducer(x => x + 1, 0);

        [this.state_subscriber] = useState(() => new StateSubscriber(this.props.name));


        useEffect(() => {
            this.state_subscriber.on('update', this.state_listener);
            return () => {
                this.state_subscriber.removeListener('update', this.state_listener);
            }
        }, []);

        useEffect(() => {
            this.interval = setInterval(() => this.force_update(), 1000);
            return () => {
                clearInterval(this.interval);
            }
        }, []);
    }

    render_ago() {
        if (this.last_update === undefined) {
            return "-";
        }
        else {
            let secs = Math.floor((Date.now() - this.last_update) / 1000);

            if (secs < 1) {
                return "+";
            }
            if (secs < 30) {
                return "|".repeat(secs);
            }
            else {
                return `${secs} second${secs !== 1 ? "s" : ""} ago`;
            }
        }
    }

    render() {
        return (
            <>
                <span style={{
                    fontSize: "x-small",
                    margin: "0px 0px 0px 0px",
                    padding: "0px 0px 0px 0px",
                    border: "0px 0px 0px 0px"
                }}>
                    &nbsp;{this.render_ago()}&nbsp;
                </span>
            </>
        );
    }
}

export const UpdateIndicator = _UpdateIndicator.functionalize();
