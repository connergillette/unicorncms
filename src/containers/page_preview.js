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
