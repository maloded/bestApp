import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPost/MyPost';
import ProfileStatus from './ProfileInfo/ProfileStatus';

const Profile = (props) => {
    return (
        <div>
                <ProfileInfo profile={props.profile} 
                setUserProfile={props.setUserProfile} />

                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

                <MyPost posts={props.posts}
                addPost={props.addPost} />
        </div>       
    );
}

export default Profile;