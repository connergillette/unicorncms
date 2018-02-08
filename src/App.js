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
                  <div className="content-window col-md-6">
                      <div className="content-container preview">
                      </div>
                  </div>
                  <div className="content-window col-md-6">
                      <div className="content-container form">
                          <form>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                              </div>
                              <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default App;
