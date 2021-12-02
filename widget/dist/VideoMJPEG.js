function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { inspect } from 'util';
import { HybridComponent } from '@homeserver-js-gui/core';
import { Configuration } from '@homeserver-js-gui/core';
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
    return /*#__PURE__*/React.createElement("div", null, "this is ", inspect(this), /*#__PURE__*/React.createElement("br", null), "props are ", inspect(this.props));
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.debug ? this.debug_data() : "", /*#__PURE__*/React.createElement(Grid, {
      component: "label",
      container: true,
      alignItems: "center",
      direction: "column",
      spacing: 1
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement(Typography, {
      component: "div"
    }, this.props.name)), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement("img", {
      src: this.src,
      alt: "Camera",
      width: this.props.width,
      onClick: this.handleClick
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 4
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: this.props.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, " ", this.props.url)))));
  }

}

_defineProperty(_VideoMJPEG, "defaultProps", {
  broker: Configuration.mqtt_broker_url,
  topic: Configuration.mqtt_command_topic,
  qos: 0,
  debug: false
});

export const VideoMJPEG = _VideoMJPEG.functionalize();