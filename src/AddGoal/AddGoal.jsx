import React from 'react';
import classes from './AddGoal.module.css';

const AddGoal = (props) => {
    const addGoalHandler = (event) => {
        event.preventDefault();
        let currentID = props.goalsCount + 1;

        const goal = {
            id: currentID,
            text: props.goalText
        };

        props.addGoal(goal);
    }

    const onInputChange = (event) => {
        props.setGoalText(event.target.value);
    }

    return (
        <form className={classes.form} onSubmit={addGoalHandler}>
            <input className={classes.form__input} onInput={onInputChange} value={props.goalText} type="text"
                   placeholder="Type a new goal text here..."/>
            <button className={classes.form__button} type="submit">Add Goal</button>
        </form>
    )
};

export default AddGoal;
