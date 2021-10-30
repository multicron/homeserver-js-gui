import React from 'react';
import { StateSubscriber } from '@homeserver-js-gui/core';
import { connect } from 'react-redux';

class __TextDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;

        this.state_subscriber = new StateSubscriber(this.variable_name());
    }

    variable_name() {
        return this.props.name.replace(/[^A-Za-z0-9_]/g, "_");
    }

    render() {
        return (
            <>
                {this.state_subscriber.get().text}
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let name = ownProps.name;
    let field = ownProps.field;
    let key = name.replace(/[^A-Za-z0-9_]/g, "_");

    return {
        text: (state[key] ? state[key][field] : undefined),
        unknown: (state[key] === undefined)
    }
}

export const TextDisplay = connect(
    mapStateToProps
)(__TextDisplay)

TextDisplay.defaultProps = {
}

export default TextDisplay;
