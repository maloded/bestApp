import React from 'react';
import classes from './MyPost.module.css';
import Posts from './Posts/Posts';

const MyPost = (props) => {
    return (
        <div>
                <input />
                <button>add post</button>
                <Posts />
        </div>       
    );
}

export default MyPost;