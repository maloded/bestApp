import React from 'react';

import classes from './MyPost.module.css';
import Posts from './Posts/Posts';

const MyPost = (props) => {
    let textElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = textElement.current.value
        props.updatePostText(text)
    }

    let postsElements = props.posts.map(p => <Posts text={p.text} likesCount={p.likesCount} />)

    return (
        <div>
            <div>
                <div>
                    <input onChange={ onPostChange } ref={textElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>add post</button>
                </div>
            </div>
            { postsElements }    
        </div>       
    );
}

export default MyPost;