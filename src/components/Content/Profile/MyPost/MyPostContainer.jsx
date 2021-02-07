import React from 'react';
import { connect } from 'react-redux';
import { addPost, updatePostText } from '../../../../redux/profile-reducer';
import MyPost from './MyPost';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export default connect(mapStateToProps, {addPost, updatePostText})(MyPost);