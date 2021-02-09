import React from 'react';
import classes from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import {Route} from 'react-router-dom';
import Login from './Login/Login';

const Content = (props) => {

    
    return (
        <div className={classes.content}>
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
            <Route path='/dialogs' render={ () => <DialogsContainer />} />
            <Route path='/users' render={ () => <UsersContainer />} />
            <Route path='/login' render={ () => <Login />} />
        </div>
    );
}

export default Content;