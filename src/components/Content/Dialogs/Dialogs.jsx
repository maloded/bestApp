import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import InputMessage from './InputMessage/InputMessage';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = props.state.messages.map(m => <MessageItem id={m.id} message={m.message}/>)

    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
            <InputMessage />
        </div>      
    );
}

export default Dialogs;