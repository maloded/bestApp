import React from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './MyPost/Posts/Posts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost state={props.state} />
        </div>       
    );
}

export default Profile;