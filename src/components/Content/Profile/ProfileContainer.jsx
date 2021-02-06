import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1064;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(Response => {
            this.props.setUserProfile(Response.data);
        });
    }

    render() {
        return (
            <div>
                <ProfileInfo {...this.props} />
                <MyPostContainer />
            </div>       
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withRouter
)(ProfileContainer);