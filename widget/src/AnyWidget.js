import React from 'react';
import ToggleSwitch from '@homeserver-js-gui/widget/ToggleSwitch';
import Slider from '@homeserver-js-gui/widget/Slider';
import TextDisplay from '@homeserver-js-gui/widget/TextDisplay';
import IconSwitch from '@homeserver-js-gui/widget/IconSwitch';
import TasmotaBulb from '@homeserver-js-gui/widget/TasmotaBulb';
import TasmotaExpandable from '@homeserver-js-gui/widget/TasmotaExpandable';
import TasmotaIconExpandable from '@homeserver-js-gui/widget/TasmotaIconExpandable';
import AutoOffSwitch from '@homeserver-js-gui/widget/AutoOffSwitch';
import ColorPicker from '@homeserver-js-gui/widget/ColorPicker';
import PanelItem from '@homeserver-js-gui/widget/PanelItem';
import EnableButton from '@homeserver-js-gui/widget/EnableButton';
import configuration from '@homeserver-js-gui/core/configuration.js';

import VideoMJPEG from '@homeserver-js-gui/widget/VideoMJPEG';
import PolledImage from '@homeserver-js-gui/widget/PolledImage';
import NetworkStatusDisplay from '@homeserver-js-gui/widget/NetworkStatusDisplay';
import PingAnnunciator from '@homeserver-js-gui/widget/PingAnnunciator';
import StateDisplay from '@homeserver-js-gui/widget/StateDisplay';
import Annunciator from '@homeserver-js-gui/widget/Annunciator';
import WeatherAnnunciator from '@homeserver-js-gui/widget/WeatherAnnunciator';
import PlaceHolder from '@homeserver-js-gui/widget/PlaceHolder';
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
