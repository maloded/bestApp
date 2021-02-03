import React from 'react';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import UsersContainer from './Users/UsersContainer';
import {Route} from 'react-router-dom';

const Content = (props) => {

    
    return (
        <div className={classes.content}>
            <Route path='/profile' render={ () => <Profile />} />
            {/* <Route path='/dialogs' render={ () => <Dialogs store={props.store} />} /> */}
            <Route path='/users' render={ () => <UsersContainer />} />
        </div>
    );
}

export default Content;