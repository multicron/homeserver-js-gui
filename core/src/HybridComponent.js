/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';
import { useRef } from 'react';

// In order to subclass this class, you import the
// named export, e.g., import { HybridComponent } from 'HybridComponent.js'.
// This will give you a class that you can extend.

// If you use the default export, you get the functional component.
// E.g., import HybridComponent from 'HybridComponent.js';

export class HybridComponent {

    constructor(props) {
        this.props = props;
    }

    // React itself will instantiate this object, or its subclass,
    // on its first use.

    // useRef takes care of making sure there is a separate
    // "this" returned for each occurence of the component on the page.

    static instantiate(props) {

        let ref = useRef(null);

        if (ref.current === null) {
            ref.current = new this(props);
        }
        return ref.current;

        const [object] = useState(() => new this(props));
        return object;
    }

    hooks() {
        // Override this method with all your hook invocations

        // this.classes = useStyles();
        // this.history = useHistory();
        // this.theme = useTheme();
    }

    render(props) {
        // Override this method with your render.  It is passed props,
        // but the value passed is also in this.props when this is called.

        // return (<div>Hello World!</div>);

        return null;
    }

    // This static method is called when react renders this "functional" component.

    static _render(props) {

        const instance = this.instantiate(props);

        instance.props = props;

        instance.hooks(props);

        return instance.render(props);
    }

    static functionalize() {
        let functional_component = this._render.bind(this);

        // React expects the defaultProps to be a property of the exported
        // function, not a static property of this class.

        if (this.defaultProps !== undefined) {
            functional_component.defaultProps = this.defaultProps;
        }
        if (this.propTypes !== undefined) {
            functional_component.propTypes = this.propTypes;
        }
        if (this.displayName !== undefined) {
            functional_component.displayName = this.displayName;
        }

        return functional_component;
    }
}

