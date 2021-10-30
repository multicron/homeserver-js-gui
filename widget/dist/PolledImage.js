import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { inspect } from 'util';
import { configuration } from '@homeserver-js-gui/core';
export class __PolledImage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      src: "/video-placeholder.png",
      isPlaceholder: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleClick() {
    this.setVideo(this.state.isPlaceholder);
  }

  uniqueURL() {
    if (this.props.uniquify) {
      return this.props.url + `${this.props.uniquify}r=${Math.random()}`;
    } else {
      return this.props.url;
    }
  }

  setVideo(shown) {
    if (shown) {
      this.setState({
        src: this.uniqueURL(),
        isPlaceholder: false,
        startedLoading: Date.now()
      });
    } else {
      this.setState({
        src: "/video-placeholder.png",
        isPlaceholder: true
      });
    }
  }

  componentDidMount() {
    this.setVideo(false);
  }

  componentWillUnmount() {
    this.setVideo(false);
  }

  handleLoad(event) {
    console.log("loaded", event);

    if (!this.state.isPlaceholder) {
      let loadTime = Date.now() - this.state.startedLoading;

      if (this.props.mininterval && loadTime < this.props.mininterval) {
        setTimeout(() => this.setVideo(true), this.props.mininterval - loadTime);
      } else {
        this.setVideo(true);
      }
    }
  }

  variable_name() {
    return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
  }

  debug_data() {
    return /*#__PURE__*/React.createElement("div", null, "local state is ", inspect(this.state), /*#__PURE__*/React.createElement("br", null), "props are ", inspect(this.props));
  }

  legend() {
    return this.props.unknown ? "Unknown" : this.props.checked ? "On" : "Off";
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
      src: this.state.src,
      width: this.props.width,
      onClick: this.handleClick,
      onLoad: this.handleLoad
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 4
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: this.props.url,
      target: "_blank"
    }, " ", this.props.url)))));
  }

}

function mapStateToProps(state, ownProps) {
  let name = ownProps.name;
  let field = ownProps.field;
  let key = name.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    checked: state[key] ? !!state[key][field] : false,
    unknown: state[key] === undefined
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const PolledImage = connect(mapStateToProps)(__PolledImage);
PolledImage.defaultProps = {
  broker: configuration.mqtt_broker_url,
  topic: configuration.mqtt_command_topic,
  qos: 0,
  debug: false,
  uniquify: "?",
  mininterval: 0
};
export default PolledImage;