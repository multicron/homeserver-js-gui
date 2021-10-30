import React from 'react';
import ToggleSwitch from 'Widget/ToggleSwitch';
import Slider from 'Widget/Slider';
import TextDisplay from 'Widget/TextDisplay';
import IconSwitch from 'Widget/IconSwitch';
import TasmotaBulb from 'Widget/TasmotaBulb';
import TasmotaExpandable from 'Widget/TasmotaExpandable';
import TasmotaIconExpandable from 'Widget/TasmotaIconExpandable';
import AutoOffSwitch from 'Widget/AutoOffSwitch';
import ColorPicker from 'Widget/ColorPicker';
import PanelItem from 'Widget/PanelItem';
import EnableButton from 'Widget/EnableButton';
import configuration from '@homeserver-js-gui/core/configuration.js';

import VideoMJPEG from 'Widget/VideoMJPEG';
import PolledImage from 'Widget/PolledImage';
import NetworkStatusDisplay from 'Widget/NetworkStatusDisplay';
import PingAnnunciator from 'Widget/PingAnnunciator';
import StateDisplay from 'Widget/StateDisplay';
import Annunciator from 'Widget/Annunciator';
import WeatherAnnunciator from 'Widget/WeatherAnnunciator';
import PlaceHolder from 'Widget/PlaceHolder';
import { useSelector } from 'react-redux';

export function AnyWidget(props) {
    const key = props.name.replace(/[^A-Za-z0-9_]/g, "_");
    const device_class = useSelector(state_store => (state_store[key] ? state_store[key]._device_class : null));

    switch (device_class) {
        case "Device":
            return <StateDisplay {...props} />;
            break;
        case "Switch":
        case "AutoOffSwitch":
        case "TasmotaOutlet":
        case "LightBulb":
        case "Relay":
        case "CompositeDevice":
            return <ToggleSwitch field="power" {...props} />;
            break;
        case "BLEBeacon":
            return <Annunciator title={`${props.name} RSSI`} field="rssi" {...props} />;
            break;
        case "TasmotaPowerMeter":
            return <Annunciator title={props.name} field="watts" {...props} />;
            break;
        case "PingerTCP":
            return <PingAnnunciator title={props.name} port="" {...props} />;
            break;
        case "Scene":
            return <EnableButton field="activate" {...props} />;
            break;
        case "Sound":
        case "AplaySound":
            return <EnableButton title="Play" field="play" {...props} />;
            break;
        case "ModalSwitch":
        case "ModalSwitchWithTimeout":
            return <EnableButton title="Next Mode" field="next_mode" {...props} />;
            break;
        case "FeitElectricBulb":
            return <TasmotaExpandable {...props} />;
            break;
        case "MagicGroup":
        case "Alarm":
            return <IconSwitch {...props} />;
            break;
        case "WeatherUnderground":
            return <WeatherAnnunciator title={props.name} {...props} />;
            break;
        case null:
            return <PlaceHolder {...props} />;
            break;
        default:
            return <StateDisplay {...props} />;
            break;
    }
}

export default AnyWidget;
