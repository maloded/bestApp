import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './MyPost/Posts/Posts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost />
        </div>       
    );
}

export default Profile;