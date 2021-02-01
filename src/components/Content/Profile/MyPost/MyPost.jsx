import React from 'react';
import classes from './MyPost.module.css';
import Posts from './Posts/Posts';

const MyPost = (props) => {

    let posts = [
        {id: 1, text: `It's my post`, likesCount: '3463'},
        {id: 2, text: 'Hi, you are good!', likesCount: '0'},
    ]

    let postsElements = posts.map(p => <Posts text={p.text} likesCount={p.likesCount} />)

    return (
        <div>
            <div>
                <div>
                    <input />
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            { postsElements }    
        </div>       
    );
}

export default MyPost;