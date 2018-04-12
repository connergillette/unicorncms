import React, { Component } from 'react';
import './App.css';
import PagePreview from './components/page_preview';
import ContentForm from './components/content_form';

class App extends Component {
  render() {
    return (
        <div className="container">
            <h1 className="main-header">UnicornCMS</h1>
              <div className="row">
                  <div className="content-window col-md-9">
                      <div className="content-container preview">
                        <PagePreview />
                      </div>
                  </div>
                  <div className="content-window col-md-3">
                      <div className="content-container form">
                        <ContentForm />
                      </div>
                  </div>
              </div>
        </div>
    );
  }
}

export default App;
