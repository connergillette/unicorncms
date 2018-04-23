import React, { Component } from 'react';
// import __html from '../preview/index.html';

class PagePreview extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            // <iframe src="/preview/index.html"></iframe>
            <object className="preview" type="text/html" data="/preview/index.html"></object>
            // <object className="preview" type="text/html"></object>
        );
    }

    injectHTML() {
        return "<div style='height: 100px; width: 100px; background-color: white'>Hello!</div>";
    }
}

export default PagePreview;

/**
 * Apply this idea in reverse:
 * Make a base template with ONLY React elements (no basic HTML)
 * Re-make the scripts necessary for editing
 * Track changes with sidebar
 * 
 * THEN allow for HTML importing
 * 
 * Boom.
 */

/**
 * <object> seems to work too, and might give me better access to the HTML
 * However, might be easiest to have script process file(s) first, then just
 * feed it to the React frontend. Listening for changes would still be a
 * challenge, though.
 */