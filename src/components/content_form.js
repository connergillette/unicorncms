import React, { Component } from 'react';
import ChangeItem from '../containers/change_item';

class ContentForm extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = { };
    // }

    render() {
        return (
            // <div>
            //     <form>
            //         <input className="form-control" id="header-text" type="text" placeholder="Header Text" />
            //         <textarea className="form-control" id="body-text" placeholder="Body Text">
            //         </textarea>
            //     </form>
            // </div>
            <div>
                <form>
                    {/* TODO: Move this away from the form tag */}
                    {/* <div className="change-item">
                        <a href="#expand1" data-toggle="collapse">
                            <div className="input-group">
                                <input type="text" className="form-control" value="Masthead Text" disabled />
                                <div className="input-group-btn">
                                    <button className="status-button btn-danger btn btn-secondary">!</button>
                                </div>
                            </div>
                        </a>
                        <div id="expand1" className="collapse">Testing</div>
                    </div>
                    <div className="change-item">
                        <a>
                            <div className="input-group">
                                <input type="text" className="form-control" value="Body Text" disabled />
                                <div className="input-group-btn">
                                    <button className="status-button btn-warning btn btn-secondary">~</button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="change-item">
                        <a>
                            <div className="input-group">
                                <input type="text" className="form-control" value="CTA Text" disabled />
                                <div className="input-group-btn">
                                    <button className="status-button btn-success btn btn-secondary">v</button>
                                </div>
                            </div>
                        </a>
                    </div> */}
                    <ChangeItem status="btn-danger" />
                    <ChangeItem status="btn-warning" />
                    <ChangeItem status="btn-info" />
                    <ChangeItem status="btn-success" />
                </form>
            </div>
        );
    }
}

export default ContentForm;
