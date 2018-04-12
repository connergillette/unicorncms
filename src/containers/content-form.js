import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectForm } from '../actions/index';
import { bindActionCreators } from 'redux';

class ContentForm extends Component {
    renderForm() {
        // if(!this.props.form){
        //     this.props.selectForm();
        // }
        // <div
        //     key={formItem.name}
        //     onClick={() => this.props.selectForm(formItem)}
        //     className="form-group">
        //         <label htmlFor={formItem.name}>
        //             {formItem.label.text}
        //         </label>
        //         <input
        //             text={formItem.input.text}
        //             placeholder={formItem.input.placeholder}
        //             type={formItem.input.type}
        //         />
        // </div>
        // return this.props.form.map((formItem) => {
            return (
                <div>Hello world!</div>
            );
        // });
    }

    render() {
        // <form>
        //     {this.renderForm()}
        // </form>
        return (
            <form>
                <input class="form-control" type="text" placeholder="Header" />
            </form>
        );
    }
    // mapDispatchToProps(dispatch) {
    //     return bindActionCreators({  })
    // }

    // export default ContentForm;
}

export default ContentForm;
// function mapStateToProps(state) {
//     return {
//         form: state.form
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({selectForm: selectForm}, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ContentForm);
