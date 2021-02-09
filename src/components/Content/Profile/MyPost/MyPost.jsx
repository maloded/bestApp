import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator, required } from '../../../../utilities/validators';
import { Textarea } from '../../../common/FormsControl/FormsControl';
import classes from './MyPost.module.css';
import Posts from './Posts/Posts';

let  maxLength70 = maxLengthCreator(70)

const AddMyPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength70]} name='newPostText' placeholder='Text post' />
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