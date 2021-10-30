import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { inspect } from 'util';
import configuration from '@homeserver-js-gui/core';


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
        }
        else {
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
        }
        else {
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
            }
            else {
                this.setVideo(true);
            }
        }
    }

    variable_name() {
        return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }

    debug_data() {
        return <div>
            local state is {inspect(this.state)}
            <br />
            props are {inspect(this.props)}
        </div>
    }

    legend() {
        return (this.props.unknown ? "Unknown" : this.props.checked ? "On" : "Off");
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
                        <img src={this.state.src}
                            width={this.props.width}
                            onClick={this.handleClick}
                            onLoad={this.handleLoad}
                        ></img>
                    </Grid>
                    <Grid item>
                        <div style={{ padding: 4 }}>
                            <a href={this.props.url} target="_blank"> {this.props.url}</a>
                        </div>
                    </Grid>
                </Grid>
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let name = ownProps.name;
    let field = ownProps.field;
    let key = name.replace(/[^A-Za-z0-9_]/g, "_");

    return {
        checked: (state[key] ? !!state[key][field] : false),
        unknown: (state[key] === undefined)
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

const PolledImage = connect(
    mapStateToProps
)(__PolledImage)

PolledImage.defaultProps = {
    broker: configuration.mqtt_broker_url,
    topic: configuration.mqtt_command_topic,
    qos: 0,
    debug: false,
    uniquify: "?",
    mininterval: 0
}

export default PolledImage;
