import React from 'react';
import classes from './Goal.module.css';

const Goal = (props) => {
    return (
        <li className={classes.goalsListItem}>
            {props.text}
        </li>
    )
};

export default Goal;
