/* eslint-disable react-hooks/rules-of-hooks */

import { Component } from 'react';
import { withRouter } from 'react-router';

export class __IdleTimeoutLink extends Component {

    static defaultProps = {
        timeout: 60000,
        to: "/",
    };

    constructor(props) {
        super(props);

        this.props = props;

        this.timer_reset = this.timer_reset.bind(this);

    }

    componentDidMount() {
        document.addEventListener('scroll', this.timer_reset);
        document.addEventListener('mousemove', this.timer_reset);
        document.addEventListener('keydown', this.timer_reset);
        document.addEventListener('click', this.timer_reset);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.timer_reset);
        document.removeEventListener('mousemove', this.timer_reset);
        document.removeEventListener('keydown', this.timer_reset);
        document.removeEventListener('click', this.timer_reset);
    }

    timer_reset(event) {
        clearTimeout(this.handle);
        this.handle = setTimeout(() => this.timer_expired(), this.props.timeout);
    }

    timer_expired() {
        if (this.props.location.pathname !== this.props.to) {
            this.props.history.push(this.props.to);
        }
    }

    render() {
        return <>{this.props.children}</>
    };
}

export const IdleTimeoutLink = withRouter(__IdleTimeoutLink);

export default IdleTimeoutLink;
