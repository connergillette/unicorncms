import React, { Component } from 'react';
import './App.css';
import ContentForm from './containers/content-form';

class App extends Component {
  render() {
    return (
        <div>
          <div className="container-fluid">
              <h1 className="main-header text-center">UnicornCMS</h1>
          </div>
          <div className="container">
              <div className="row">
                  <div className="content-window col-md-6">
                      <div className="content-container preview">
                      </div>
                  </div>
                  <div className="content-window col-md-6">
                      <div className="content-container form">
                          <ContentForm />
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
  updatePreview() {

  }
}

export default App;
