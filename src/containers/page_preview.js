import React, { Component } from 'react';
// import __html from '../preview/index.html';

class PagePreview extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <iframe src="/preview/index.html"></iframe>
            // <div dangerouslySetInnerHTML={{ __html: __html }}></div>
        );
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