import React from 'react';
import classes from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import {Route, withRouter} from 'react-router-dom';
import LoginContainer from './Login/LoginContainer';
import { initializeContent } from './../../redux/content-reducer';
import Preloader from '../common/Prelouder';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Content extends React.Component {

    componentDidMount() {
        this.props.initializeContent()
    }

    render() {

		if (!this.props.initialized) {
			return <Preloader />
		}

        return (
            <div className={classes.content}>
                <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
                <Route path='/dialogs' render={ () => <DialogsContainer />} />
                <Route path='/users' render={ () => <UsersContainer />} />
                <Route path='/login' render={ () => <LoginContainer />} />
            </div>
        );
    }

}

let mapStateToProps = (state) => ({
	initialized: state.content.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, {initializeContent}))(Content);