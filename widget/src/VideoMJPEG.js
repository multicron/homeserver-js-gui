/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { inspect } from 'util';
import { HybridComponent } from '@homeserver-js-gui/core/HybridComponent';
import configuration from '@homeserver-js-gui/core/configuration.js';


export class VideoMJPEG extends HybridComponent {

    static defaultProps = {
        broker: configuration.mqtt_broker_url,
        topic: configuration.mqtt_command_topic,
        qos: 0,
        debug: false
    };

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
            }
        }, []);
    }

    handleClick() {
        if (this.mode !== "placeholder") {
            this.setVideo("placeholder");
        }
        else {
            console.log("setVideo('live')");
            this.setVideo("live");
        }
    }

    setVideo(mode) {
        if (mode === "placeholder") {
            this.set_src("/video-placeholder.png");
            this.set_mode("placeholder");
        }
        else if (mode === "live") {
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
            }
        }
    }

    debug_data() {
        return <div>this is {inspect(this)}
            <br />
            props are {inspect(this.props)}
        </div>
    }

    render() {
        return (
            <>
                {this.props.debug ? this.debug_data() : ""}
                <Grid component="label" container alignItems="center" direction="column" spacing={1}>
                    <Grid item>
                        <Typography component="div">
                            {this.props.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={this.src}
                            alt="Camera"
                            width={this.props.width}
                            onClick={this.handleClick}
                        />
                    </Grid>
                    <Grid item>
                        <div style={{ padding: 4 }}>
                            <a href={this.props.url} target="_blank" rel="noopener noreferrer"> {this.props.url}</a>
                        </div>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default VideoMJPEG.functionalize();
