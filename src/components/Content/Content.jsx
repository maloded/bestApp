import React from 'react';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import Users from './Users/Users';
import {Route} from 'react-router-dom';

const Content = (props) => {
    return (
        <div className={classes.content}>
            <Route path='/profile' render={ () => <Profile state={props.state.profilePage.posts} />} />
            <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
            <Route path='/users' render={ () => <Users />} />
        </div>
    );
}

export default Content;