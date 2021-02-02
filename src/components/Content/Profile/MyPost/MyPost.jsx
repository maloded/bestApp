import React from 'react';
import classes from './MyPost.module.css';
import Posts from './Posts/Posts';

const MyPost = (props) => {

    let postsElements = props.state.map(p => <Posts text={p.text} likesCount={p.likesCount} />)

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