
import './App.css';
import './Today.css'
import Menu from './Menu';
import Navbar from './Navbar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TaskEditor from './TaskEditor';


function TodoList(props) {

  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var date = new Date().toLocaleDateString('en-us', options);

  return (
    <div className='today'>
      <h1>Today</h1>
      <p className='today-date'>{date}</p>
      {props.openTaskEditor ? <TaskEditor
        taskId={props.taskId}
        taskName={props.taskName}
        dueDate={props.dueDate}
        openTaskEditor={props.openTaskEditor}
        onCancelClick={props.onCancelClick}
        onTaskNameChange={props.onTaskNameChange}
        onDescriptionChange={props.onDescriptionChange}
        onDueDateChange={props.onDueDateChange}
        onDueDateRemove={props.onDueDateRemove}
        onAddTaskClick={props.onAddTaskClick} /> :
        <button className='new-task-button' onClick={props.onNewTaskClick}>
          <FontAwesomeIcon icon={faPlus} className='plus-icon' />
          Add a task
        </button>}

    </div >
  )
}


function App() {
  const [lists, setLists] = useState([{ listId: 0, listName: 'Today', tasks: [] }]);
  const [selectedList, setSelectedList] = useState(lists[0]);
  const [todoList, setTodoList] = useState([]);
  const [openTaskEditor, setOpenTaskEditor] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [taskId, setTaskId] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  function handleMenuToggle() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
    else {
      setMenuIsOpen(true);
    }
  }


  function handleListSelect() {

  }

  function handleHomeButtonClick() {
    setSelectedList(lists[0]);
  }

  function handleTaskNameChange(e) {
    setTaskName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleDueDateChange(date) {
    setDueDate(date)
  }

  function handleDueDateRemove() {
    setDueDate('');
  }

  function handleCancelClick() {
    setOpenTaskEditor(false);
  }

  function handleNewTaskClick() {
    setOpenTaskEditor(true);
  }

  function handleTaskAddClick() {
    setTaskId(taskId + 1);
    setTodoList([
      ...todoList,
      {
        id: taskId,
        name: taskName,
        description: description,
        dueDate: dueDate,
      }
    ])
    setLists([
      ...lists,
      todoList
    ])
  }





  return (
    <div className='container'>
      <Navbar onMenuToggle={handleMenuToggle} />
      <Menu menuIsOpen={menuIsOpen} />
      <TodoList
        taskId={taskId}
        taskName={taskName}
        dueDate={dueDate}
        lists={lists}
        todoList={todoList}
        openTaskEditor={openTaskEditor}
        onNewTaskClick={handleNewTaskClick}
        onTaskNameChange={handleTaskNameChange}
        onDescriptionChange={handleDescriptionChange}
        onCancelClick={handleCancelClick}
        onDueDateChange={handleDueDateChange}
        onDueDateRemove={handleDueDateRemove}
        onAddTaskClick={handleTaskAddClick}
      />
    </div>

  )
}

export default App;
