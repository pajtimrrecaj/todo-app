
import './TaskEditor.css';
import { useState } from 'react';
import ReactDatePicker from './DatePicker';
import React, { useCallback, useEffect, useRef } from 'react';
import Textarea from 'react-expanding-textarea';

function MyTextarea({ description, onChange }) {
    const textareaRef = useRef(null);


    return (
        <>
            <Textarea
                rows={2}
                className="textarea"
                id="my-textarea"
                maxLength="3000"
                name="pet[notes]"
                onChange={onChange}
                placeholder="Description"
                ref={textareaRef}
                value={description}
                spellCheck={false}
            />
        </>
    )
}


function TaskEditor(props) {

    return (
        <div className='task-editor'>
            <input type='text'
                placeholder="Task name"
                className='task-name'
                onChange={props.onTaskNameChange}
                autoFocus={true}
            >
            </input>
            <MyTextarea description={props.description} onChange={props.onDescriptionChange} />
            <ReactDatePicker dueDate={props.dueDate} onDatePick={props.onDueDateChange} onDateRemove={props.onDueDateRemove}></ReactDatePicker>
            <div className='action-buttons'>
                <button className='action-button' id='cancel-button' onClick={props.onCancelClick}>Cancel</button>
                <button className='action-button' id='add-button' disabled={props.taskName == ''} onClick={props.onAddTaskClick}>Add</button>
            </div>
        </div>
    )

}

export default TaskEditor;