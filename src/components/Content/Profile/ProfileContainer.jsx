import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPost/MyPost';
import { connect } from 'react-redux';
import { setUserProfile, addPost, updatePostText, getProfile } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1064;
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <div>
                <ProfileInfo profile={this.props.profile} 
                setUserProfile={this.props.setUserProfile} />

                <MyPost posts={this.props.posts}
                newPostText={this.props.newPostText}
                addPost={this.props.addPost}
                updatePostText={this.props.updatePostText} />
            </div>       
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

export default compose(
    connect(mapStateToProps, {setUserProfile, addPost, updatePostText, getProfile}),
    withRouter
)(ProfileContainer);