import React from 'react';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import {Route} from 'react-router-dom';

const Content = (props) => {

    
    return (
        <div className={classes.content}>
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
            {/* <Route path='/dialogs' render={ () => <Dialogs store={props.store} />} /> */}
            <Route path='/users' render={ () => <UsersContainer />} />
        </div>
    );
}

export default Content;