import React from 'react';
import { connect } from 'react-redux';
import { addPostAC, updatePostTextAC } from '../../../../redux/profile-reducer';
import MyPost from './MyPost';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostAC())},
        updatePostText: (text) => {dispatch(updatePostTextAC(text))}
    }
}

const  MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;