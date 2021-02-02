import React from 'react';
import { addPostAC, updatePostTextAC } from '../../../../redux/profile-reducer';

import classes from './MyPost.module.css';
import Posts from './Posts/Posts';

const MyPost = (props) => {

    let textElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        let text = textElement.current.value
        props.dispatch(updatePostTextAC(text))
    }

    let postsElements = props.profilePage.posts.map(p => <Posts text={p.text} likesCount={p.likesCount} />)

    return (
        <div>
            <div>
                <div>
                    <input onChange={onPostChange} ref={textElement} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            { postsElements }    
        </div>       
    );
}

export default MyPost;