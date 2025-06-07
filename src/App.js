import { useEffect, useState } from 'react';
import './App.css';
import { Header } from "./components/Header"
import {AddTask} from "./components/AddTask"
import {ShowTask} from "./components/ShowTask"




const App = () =>
{

    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
    const [task, setTask] = useState({});

    useEffect(() =>
    {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList])

    return (
        <div>
            <Header />
            <AddTask taskList={taskList} setTaskList={setTaskList} setTask = {setTask} task= {task} />
            <ShowTask taskList={taskList} setTaskList={setTaskList} setTask = {setTask} task= {task} />
        </div>
        
    );
}

export default App;   