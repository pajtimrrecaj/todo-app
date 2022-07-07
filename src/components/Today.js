import { useState } from 'react';
import './Today.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';

function AddTaskButton({ onClick }) {
    return (
        <button className='new-task-button' onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} className='plus-icon' />
            Add a task
        </button>
    )
}

function Today() {
    const [newTask, setNewTask] = useState(false);

    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var date = new Date().toLocaleDateString('en-us', options);

    function handleNewTask() {
        setNewTask(true);
    }

    function handleCancel() {
        setNewTask(false);
    }


    return (
        <div className='today'>
            <h1>Today</h1>
            <p className='today-date'>{date}</p>
            {newTask ? <TaskEditor onCancelClick={handleCancel} /> : <AddTaskButton onClick={handleNewTask} />}

        </div>
    )
}

export default Today;