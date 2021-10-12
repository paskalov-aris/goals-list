import React from 'react';
import classes from './GoalsList.module.css';
import Goal from "../Goal/Goal";
import AddGoal from "../AddGoal/AddGoal";

const GoalsList = (props) => {
    const addGoal = (goal) => {
        props.setGoalsList(prevState => prevState.concat(goal))
    }

    let count = props.goalsList.length;

    return (
        <div>
            <AddGoal addGoal={addGoal} goalsCount={count}/>

            <ul className={classes.goalsList}>
                {props.goalsList.map(goal => {
                    return <Goal key={goal.id} text={goal.text} addGoal={addGoal}/>
                })}
            </ul>
        </div>
    )
}

export default GoalsList;
