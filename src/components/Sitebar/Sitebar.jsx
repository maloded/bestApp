import React from 'react';
import Navbar from './Navbar/Navbar';
import classes from './Sitebar.module.css';

const Sitebar = (props) => {
    return (
        <div className={classes.sitebar}>
            <Navbar />
        </div>
    );
}

export default Sitebar;