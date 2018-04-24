import React, { Component } from 'react';
// import __html from '../preview/index.html';

class PagePreview extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let rawHTML = <div className="preview">
            <div className="container-fluid main-header">
                <div className="container">Main Header</div>
            </div>
            <div className="container">
                <h1>Page Header</h1>
                <h2>Subheader</h2>
                <p>Page Content</p>
            </div>
        </div>;


        // return this.processHTML(rawHTML);
        // return rawHTML;
        return (
            // <iframe src="/preview/index.html"></iframe>
            <object className="preview" type="text/html" data="/preview/index.html"></object>
            // <object className="preview" type="text/html"></object>
        );
    }

    processHTML(document) {
        let textInputs = [];
        let h1 = document.getElementsByTagName("h1");
        let h2 = document.getElementsByTagName("h2");

        textInputs = textInputs.concat(h1);
        textInputs = textInputs.concat(h2);

        for (var i = 0; i < textInputs.length; i++) {
            var currentTag = textInputs[i];
            for (var k = 0; k < textInputs[i].length; k++) {
                currentTag[k].classList.add("editable");

                currentTag[k].onclick = function (event) {
                    console.log("Input clicked!");
                    this.makeInput(event.target);
                };
            }
        }
    }

    applyChanges(value, document) {
        let focusedTag = document.getElementById("focused-tag");
        let focusedInput = document.getElementById("focused-input");

        focusedTag.innerHTML = value;
        focusedTag.id = "";
        focusedInput.id = "";
    }

    makeInput(target, document) {
        if (target.id != "focused-tag") {
            target.id = "focused-tag";
            target.innerHTML =
                `<input id="focused-input" style='color: black; width:100%' 
                  value='${target.innerHTML.trim()}' onfocusout='applyChanges(this.value)'
                  type='text' />`;
            document.getElementById("focused-input").focus();
        }
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