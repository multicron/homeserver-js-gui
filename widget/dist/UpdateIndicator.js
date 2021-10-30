/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useEffect, useReducer, useState } from 'react';
import { HybridComponent } from 'HybridComponent';
import { StateSubscriber } from 'StateSubscriber';
export class UpdateIndicator extends HybridComponent {
  constructor(props) {
    super(props);
    this.props = props;

    if (this.props.immediate) {
      this.last_update = new Date();
    }
  }

  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  state_listener = () => {
    this.last_update = new Date();
    this.force_update();
  };

  hooks() {
    [, this.force_update] = useReducer(x => x + 1, 0);
    [this.state_subscriber] = useState(() => new StateSubscriber(this.variable_name(this.props.name)));
    useEffect(() => {
      this.state_subscriber.on('update', this.state_listener);
      return () => {
        this.state_subscriber.removeListener('update', this.state_listener);
      };
    }, []);
    useEffect(() => {
      this.interval = setInterval(() => this.force_update(), 1000);
      return () => {
        clearInterval(this.interval);
      };
    }, []);
  }

  render_ago() {
    if (this.last_update === undefined) {
      return "-";
    } else {
      let secs = Math.floor((Date.now() - this.last_update) / 1000);

      if (secs < 1) {
        return "+";
      }

      if (secs < 30) {
        return "|".repeat(secs);
      } else {
        return `${secs} second${secs !== 1 ? "s" : ""} ago`;
      }
    }
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "x-small",
        margin: "0px 0px 0px 0px",
        padding: "0px 0px 0px 0px",
        border: "0px 0px 0px 0px"
      }
    }, "\xA0", this.render_ago(), "\xA0"));
  }

}
export default UpdateIndicator.functionalize();