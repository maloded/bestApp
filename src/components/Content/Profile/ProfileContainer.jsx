import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, addPost, getProfile, getStatus, updateStatus } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14036;
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setUserProfile, addPost, getProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);