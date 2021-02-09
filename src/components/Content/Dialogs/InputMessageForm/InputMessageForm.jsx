import React from 'react';
import classes from './InputMessageForm.module.css';
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../../../common/FormsControl/FormsControl';
import { maxLengthCreator, required } from '../../../../utilities/validators';

let maxLength50 = maxLengthCreator(50)

const InputMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name='newMessageText' placeholder='Text message' />
            </div>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

const InputMessageForm = reduxForm({form: 'dialog'})(InputMessage)

export default InputMessageForm;