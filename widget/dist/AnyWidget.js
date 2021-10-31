import React from 'react';
import { ToggleSwitch } from '@homeserver-js-gui/widget';
import { Slider } from '@homeserver-js-gui/widget';
import { TextDisplay } from '@homeserver-js-gui/widget';
import { IconSwitch } from '@homeserver-js-gui/widget';
import { TasmotaBulb } from '@homeserver-js-gui/widget';
import { TasmotaExpandable } from '@homeserver-js-gui/widget';
import { TasmotaIconExpandable } from '@homeserver-js-gui/widget';
import { AutoOffSwitch } from '@homeserver-js-gui/widget';
import { ColorPicker } from '@homeserver-js-gui/widget';
import { PanelItem } from '@homeserver-js-gui/widget';
import { EnableButton } from '@homeserver-js-gui/widget';
import { configuration } from '@homeserver-js-gui/core';
import { VideoMJPEG } from '@homeserver-js-gui/widget';
import { PolledImage } from '@homeserver-js-gui/widget';
import { NetworkStatusDisplay } from '@homeserver-js-gui/widget';
import { PingAnnunciator } from '@homeserver-js-gui/widget';
import { StateDisplay } from '@homeserver-js-gui/widget';
import { Annunciator } from '@homeserver-js-gui/widget';
import { WeatherAnnunciator } from '@homeserver-js-gui/widget';
import { PlaceHolder } from '@homeserver-js-gui/widget';
import { useSelector } from 'react-redux';
import { jsx as _jsx } from "react/jsx-runtime";
export function AnyWidget(props) {
  const key = props.name.replace(/[^A-Za-z0-9_]/g, "_");
  const device_class = useSelector(state_store => state_store[key] ? state_store[key]._device_class : null);

  switch (device_class) {
    case "Device":
      return /*#__PURE__*/_jsx(StateDisplay, { ...props
      });
      break;

    case "Switch":
    case "AutoOffSwitch":
    case "TasmotaOutlet":
    case "LightBulb":
    case "Relay":
    case "CompositeDevice":
      return /*#__PURE__*/_jsx(ToggleSwitch, {
        field: "power",
        ...props
      });
      break;

    case "BLEBeacon":
      return /*#__PURE__*/_jsx(Annunciator, {
        title: `${props.name} RSSI`,
        field: "rssi",
        ...props
      });
      break;

    case "TasmotaPowerMeter":
      return /*#__PURE__*/_jsx(Annunciator, {
        title: props.name,
        field: "watts",
        ...props
      });
      break;

    case "PingerTCP":
      return /*#__PURE__*/_jsx(PingAnnunciator, {
        title: props.name,
        port: "",
        ...props
      });
      break;

    case "Scene":
      return /*#__PURE__*/_jsx(EnableButton, {
        field: "activate",
        ...props
      });
      break;

    case "Sound":
    case "AplaySound":
      return /*#__PURE__*/_jsx(EnableButton, {
        title: "Play",
        field: "play",
        ...props
      });
      break;

    case "ModalSwitch":
    case "ModalSwitchWithTimeout":
      return /*#__PURE__*/_jsx(EnableButton, {
        title: "Next Mode",
        field: "next_mode",
        ...props
      });
      break;

    case "FeitElectricBulb":
      return /*#__PURE__*/_jsx(TasmotaExpandable, { ...props
      });
      break;

    case "MagicGroup":
    case "Alarm":
      return /*#__PURE__*/_jsx(IconSwitch, { ...props
      });
      break;

    case "WeatherUnderground":
      return /*#__PURE__*/_jsx(WeatherAnnunciator, {
        title: props.name,
        ...props
      });
      break;

    case null:
      return /*#__PURE__*/_jsx(PlaceHolder, { ...props
      });
      break;

    default:
      return /*#__PURE__*/_jsx(StateDisplay, { ...props
      });
      break;
  }
}
export default AnyWidget;