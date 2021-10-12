import './App.css';
import GoalsList from "./GoalsList/GoalsList";
import {useState} from "react";

const App = () => {
    const [goalsList, setGoalsList] = useState([
        {id: 1, text: 'Написать приложение "Goals List"'},
        {id: 2, text: 'Изучить библиотеку React'},
        {id: 3, text: 'Вступить в команду и работать над реальными проектами'}
    ]);

    return (
        <div className="app">
            <GoalsList goalsList={goalsList} setGoalsList={setGoalsList} />
        </div>
    );
}

export default App;
