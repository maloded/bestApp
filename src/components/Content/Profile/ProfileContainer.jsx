import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { profileAPI } from '../../../API/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1064;
        }
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
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