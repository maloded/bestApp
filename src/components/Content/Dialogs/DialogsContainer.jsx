import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {

    render() {
        return (
            <Dialogs {...this.props} />
        )   
    }          
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

export default connect(mapStateToProps, {addMessage})(DialogsContainer)
