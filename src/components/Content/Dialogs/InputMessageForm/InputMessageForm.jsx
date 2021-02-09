import React from 'react';
import classes from './InputMessageForm.module.css';
import {Field, reduxForm} from 'redux-form';


const InputMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageText' placeholder='Text message' />
            </div>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

const InputMessageForm = reduxForm({form: 'dialog'})(InputMessage)

export default InputMessageForm;