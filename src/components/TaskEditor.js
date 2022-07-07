
import './TaskEditor.css';
import { useState } from 'react';
import ReactDatePicker from './DatePicker';


function TaskEditor({ onCancelClick }) {

    const [titleEmpty, setTitleEmpty] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [todoLists, setTodoLists] = useState([]);

    function handleAddClick() {
        setTodoLists(
            [
                ...todoLists,
                { title: title, description: description }
            ]
        )

    }

    function handleTitleChange(e) {
        if (e.target.value === '') {
            setTitleEmpty(true);
        }
        else {
            setTitleEmpty(false);
        }
        setTitle(e.target.value);

    }


    return (
        <div className='task-editor'>

            <input type='text'
                placeholder="Task name"
                className='task-name'
                onChange={handleTitleChange}
                value={title}
            >
            </input>
            <div className='task-description'
                contentEditable placeholder='Description'
                value={description}
                onChange={e => setDescription(e.target.value)}>
            </div>
            <ReactDatePicker dueDate={dueDate} onDatePick={(e) => setDueDate(e.target.value)}></ReactDatePicker>
            <div className='action-buttons'>
                <button className='action-button' id='cancel-button' onClick={onCancelClick}>Cancel</button>
                <button className='action-button' id='add-button' disabled={titleEmpty} onClick={handleAddClick}>Add</button>
            </div>
        </div>
    )

}

export default TaskEditor;