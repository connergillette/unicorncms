import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChangeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Change item',
      status: props.status
    };

    // event binding goes here
  }

  render() {
    return (
      <div className="change-item">
        <a href="#expand1" data-toggle="collapse" role="button" aria-controls="expand1" aria-expanded="false">
          <div className="input-group">
            <input type="text" className="form-control" value={this.state.title} disabled />
            <div className="input-group-btn">
              <button className={`status-button btn ${this.state.status}`} type="button">!</button>
            </div>
            <div id="expand1" className="collapse">Test</div>
          </div>
        </a>
      </div>
    );
  }
}

export default ChangeItem;