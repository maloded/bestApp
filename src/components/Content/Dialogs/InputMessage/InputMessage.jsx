import React from 'react';
import classes from './InputMessage.module.css';

const InputMessage = (props) => {
    return (
        <div className={classes.input_wrapper}>
            <input type="text"/>
            <button>add messade</button>
        </div>
    );
}

export default InputMessage;