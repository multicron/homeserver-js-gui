import React from 'react';
import Tick from '@pqina/flip';
import flip from '@pqina/flip/dist/flip.min.css';
export class Flip extends React.Component {
  constructor(props) {
    super(props);
    this._tickRef = /*#__PURE__*/React.createRef();
  }

  componentDidMount() {
    this._tickInstance = Tick.DOM.create(this._tickRef.current, {
      value: this.props.value
    });
  }

  componentDidUpdate() {
    if (!this._tickInstance) return;
    this._tickInstance.value = this.props.value;
  }

  componentWillUnmount() {
    if (!this._tickInstance) return;
    Tick.DOM.destroy(this._tickRef.current);
  }

  render() {
    return /*#__PURE__*/React.createElement("span", {
      ref: this._tickRef,
      className: flip.tick
    }, /*#__PURE__*/React.createElement("span", {
      "data-repeat": "true",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      "data-view": "flip"
    }, "Tick")));
  }

}
export default Flip;