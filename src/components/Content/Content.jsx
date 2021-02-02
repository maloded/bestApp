import React from 'react';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import Users from './Users/Users';
import {Route} from 'react-router-dom';

const Content = (props) => {

    
    return (
        <div className={classes.content}>
            <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} 
            dispatch={props.dispatch}  />} />
            <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage} />} />
            <Route path='/users' render={ () => <Users />} />
        </div>
    );
}

export default Content;