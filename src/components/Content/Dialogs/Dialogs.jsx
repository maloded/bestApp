import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import InputMessage from './InputMessage/InputMessage';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Dimych'}
    ]

    let messages = [
        {id: 1, message: 'Hello, I am cool!'},
        {id: 2, message: 'Hew are you?'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = messages.map(m => <MessageItem id={m.id} message={m.message}/>)

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