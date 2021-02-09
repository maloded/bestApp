import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import InputMessageForm from './InputMessageForm/InputMessageForm';

const Dialogs = (props) => {

    let onAddMessage = (value) => {
        props.addMessage(value.newMessageText)
    }

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = props.messages.map(m => <MessageItem id={m.id} message={m.message}/>)

    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
            <div  className={classes.input}>
                <InputMessageForm onSubmit={onAddMessage} />
            </div>
        </div>      
    );
}

export default Dialogs;