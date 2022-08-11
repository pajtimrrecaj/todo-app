

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './TaskList.css'
import { useState } from "react";

function TaskList({ lists, selectedKey, onChangeTask }) {

    const selectedList = lists.filter(list =>
        list.listId == selectedKey)
    const tasks = selectedList[0].tasks;
    const [showFinishedTasks, setShowFinishedTasks] = useState(false);

    function handleShowFinishedTasks() {
        setShowFinishedTasks(!showFinishedTasks);
    }

    if (Array.isArray(tasks) && tasks.length >= 1) {
        const unfinishedTasks = tasks.filter(t =>
            t.done === false
        )
        const finishedTasks = tasks.filter(t =>
            t.done
        )

        return (
            <>
                <ul className="unfinished-task-list">
                    {unfinishedTasks.map((task, index) =>
                        <li key={task.id}>
                            {index == 0 && <hr />}
                            <div className='listed-task'>
                                <input type='checkbox' checked={task.done} onChange={e => {
                                    onChangeTask({
                                        ...task,
                                        done: e.target.checked
                                    });
                                }}>
                                </input>
                                <div className="listed-task-data">
                                    <p className="listed-task-name">{task.name}</p>
                                    <p className="listed-task-description">{task.description}</p>
                                    {typeof task.dueDate == 'object' &&
                                        <div className="listed-task-date">
                                            <CalendarMonthIcon className='listed-task-calendar-icon'
                                                sx={{ fontSize: 18, color: 'gray' }} />
                                            <p className="listed-task-date-text">{typeof task.dueDate == 'object' ? task.dueDate.toDateString() : task.dueDate}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                            <hr />
                        </li>

                    )
                    }

                </ul >

                <button className="finished-tasks-button" onClick={handleShowFinishedTasks}>
                    {showFinishedTasks ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-right"></i>} Completed</button>
                {(finishedTasks.length > 0 && showFinishedTasks) &&
                    <ul className="finished-task-list">
                        {finishedTasks.map((task, index) =>
                            <li key={task.id}>
                                {index == 0 && <hr />}
                                <div className='listed-task'>
                                    <input type='checkbox' checked={task.done} onChange={e => {
                                        onChangeTask({
                                            ...task,
                                            done: e.target.checked
                                        });
                                    }}>
                                    </input>
                                    <div className="listed-task-data">
                                        <p className="listed-task-name">{task.name}</p>
                                        <p className="listed-task-description">{task.description}</p>
                                        <div className="listed-task-date">
                                            <CalendarMonthIcon className='listed-task-calendar-icon'
                                                sx={{ fontSize: 18, color: 'gray' }}
                                            />
                                            <p className="listed-task-date-text">{typeof task.dueDate == 'object' ? task.dueDate.toDateString() : task.dueDate}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </li>

                        )
                        }

                    </ul >}
            </>

        )
    }

}

export default TaskList;