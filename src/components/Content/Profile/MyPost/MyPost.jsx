import React from 'react';
import {Field, reduxForm} from 'redux-form';
import classes from './MyPost.module.css';
import Posts from './Posts/Posts';

const AddMyPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Text post' />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddMyPostForm = reduxForm({form: 'profile'})(AddMyPost)

const MyPost = (props) => {
    
    let onAddPost = (value) => {
        props.addPost(value.newPostText)
    }

    let postsElements = props.posts.map(p => <Posts text={p.text} likesCount={p.likesCount} />)

    return (
        <div>
            <div>
                <AddMyPostForm onSubmit={onAddPost} />
            </div>
            { postsElements }    
        </div>       
    );
}
export default MyPost;