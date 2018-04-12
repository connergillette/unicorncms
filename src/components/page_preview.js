import React, { Component } from 'react';
var __html = require("./test.html");
var template = {__html: __html};

class PagePreview extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = { };
    // }

    render() {
        return (
            <div class="page-preview" dangerouslySetInnerHTML={template}></div>
        );
    }
}

export default PagePreview;
