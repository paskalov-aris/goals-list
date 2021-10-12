import React, {useState} from 'react';
import classes from './AddGoal.module.css';

const AddGoal = (props) => {
    const [goalText, setGoalText] = useState(
        '',
    );

    const addGoalHandler = (event) => {
        event.preventDefault();
        let currentID = props.goalsCount + 1;

        const goal = {
            id: currentID,
            text: goalText
        };

        props.addGoal(goal);
    };

    const onInputChange = (event) => {
        setGoalText(event.target.value);
    }

    return (
        <form className={classes.form} onSubmit={addGoalHandler}>
            <input className={classes.form__input} onInput={onInputChange} value={goalText} type="text"
                   placeholder="Type a new goal text here..."/>
            <button className={classes.form__button} type="submit">Add Goal</button>
        </form>
    )
};

export default AddGoal;
