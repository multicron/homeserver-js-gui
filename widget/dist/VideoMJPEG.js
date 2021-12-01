function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { inspect } from 'util';
import { HybridComponent } from '@homeserver-js-gui/core';
import { Configuration } from './Configuration.js';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export class _VideoMJPEG extends HybridComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this);
  }

  hooks() {
    [this.src, this.set_src] = useState("video-placeholder.png");
    [this.mode, this.set_mode] = useState("placeholder");
    useEffect(() => {
      this.setVideo("placeholder");
      return () => {
        this.setVideo("placeholder");
      };
    }, []);
  }

  handleClick() {
    if (this.mode !== "placeholder") {
      this.setVideo("placeholder");
    } else {
      console.log("setVideo('live')");
      this.setVideo("live");
    }
  }

  setVideo(mode) {
    if (mode === "placeholder") {
      this.set_src("/video-placeholder.png");
      this.set_mode("placeholder");
    } else if (mode === "live") {
      this.set_src("/spinner.gif");
      this.set_mode("spinner");
      this.imageLoader = new Image();
      this.imageLoader.src = this.props.url;

      this.imageLoader.onload = () => {
        console.log("imageLoader.onload");
        this.set_src(this.props.url);
        this.set_mode("live");
      };

      this.imageLoader.onerror = () => {
        this.setVideo("placeholder");
      };
    }
  }

  debug_data() {
    return /*#__PURE__*/_jsxs("div", {
      children: ["this is ", inspect(this), /*#__PURE__*/_jsx("br", {}), "props are ", inspect(this.props)]
    });
  }

  render() {
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [this.props.debug ? this.debug_data() : "", /*#__PURE__*/_jsxs(Grid, {
        component: "label",
        container: true,
        alignItems: "center",
        direction: "column",
        spacing: 1,
        children: [/*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(Typography, {
            component: "div",
            children: this.props.name
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx("img", {
            src: this.src,
            alt: "Camera",
            width: this.props.width,
            onClick: this.handleClick
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx("div", {
            style: {
              padding: 4
            },
            children: /*#__PURE__*/_jsxs("a", {
              href: this.props.url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [" ", this.props.url]
            })
          })
        })]
      })]
    });
  }

}

_defineProperty(_VideoMJPEG, "defaultProps", {
  broker: Configuration.mqtt_broker_url,
  topic: Configuration.mqtt_command_topic,
  qos: 0,
  debug: false
});

export const VideoMJPEG = _VideoMJPEG.functionalize();