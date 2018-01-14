import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <div className="container-fluid">
              <h1 className="main-header text-center">Hello world!</h1>
          </div>
          <div className="container">
              <div className="row">
                  <div className="content-window preview col-md-6">
                  </div>
                  <div className="content-window form col-md-6">
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default App;
