import React from 'react';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import Users from './Users/Users';
import {Route} from 'react-router-dom';

const Content = (props) => {
    return (
        <div className={classes.content}>
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/users' component={Users} />
        </div>
    );
}

export default Content;