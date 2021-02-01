import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {
    return (
        <div>
            <div>
                <img src="2" alt="img"/>
            </div>
            <div>
                {props.text}
            </div>
            <div>
            {props.likesCount + ' likes'}
            </div>
        </div>       
    );
}

export default Posts;