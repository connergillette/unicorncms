import React, { Component } from 'react';

class ContentForm extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = { };
    // }

    render() {
        return (
            <form>
                <input id="header-text" type="text" placeholder="Header Text" />
                <input id="body-text" type="text" placeholder="Body Text" />
            </form>
        );
    }
}

export default ContentForm;
