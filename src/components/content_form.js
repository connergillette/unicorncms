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
                <input className="form-control" id="header-text" type="text" placeholder="Header Text" />
                {/* <textarea onInput={() => {this.getTextAreaSize();}} class="form-control" style={{height: "100px"}} id="body-text" placeholder="Body Text">
                </textarea> */}
                <textarea className="form-control" id="body-text" placeholder="Body Text">
                </textarea>
            </form>
        );
    }

    getTextAreaSize() {
        let textarea = document.getElementById("body-text");
    }
}

export default ContentForm;
