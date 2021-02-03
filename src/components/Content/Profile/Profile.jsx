import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer />
        </div>       
    );
}

export default Profile;