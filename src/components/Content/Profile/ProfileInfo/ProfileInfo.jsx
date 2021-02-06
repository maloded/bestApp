import React from 'react';
import Preloader from '../../../common/Prelouder';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt="img"/>
            </div>
            <div>
                <ul>
                    <li>{"Name: " + props.profile.fullName}</li>
                    <li>{"About me: " + props.profile.aboutMe}</li>
                    <li>{props.profile.lookingForAJob ? "Looking for a job: yes" : "Looking for a job: no"}</li>
                    <li>{"Description: " + props.profile.lookingForAJobDescription}</li>
                    <li>{"Instagram: " + props.profile.contacts.instagram}</li>
                </ul>
            </div>
        </div>       
    );
}

export default ProfileInfo;