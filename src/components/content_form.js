import React, { Component } from 'react';
import ChangeItem from '../containers/change_item';

class ContentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <form>
                <ChangeItem status="btn-danger" />
                <ChangeItem status="btn-warning" />
                <ChangeItem status="btn-info" />
                <ChangeItem status="btn-success" />
            </form>
        );
    }
}

export default ContentForm;
