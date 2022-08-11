
import './App.css';
import './TodoList.css'
import Menu from './Menu';
import Navbar from './Navbar';
import { useState } from 'react';
import TaskEditor from './TaskEditor';
import TaskList from './TaskList';
import SearchResults from './SearchResults';


let listId = 0;
let taskId = 0;


function TodoList(props) {

  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var date = new Date().toLocaleDateString('en-us', options);

  const selectedList = props.lists.filter(l =>
    l.listId === props.selectedKey
  );


  return (
    <div className='todo-list'>
      <h1 className='list-name'>{selectedList[0].listName}</h1>
      {props.selectedKey == 0 && <p className='today-date'>{date}</p>}
      {props.openTaskEditor ? <TaskEditor
        key={props.selectedKey}
        lists={props.lists}
        taskId={props.taskId}
        taskName={props.taskName}
        description={props.description}
        dueDate={props.dueDate}
        openTaskEditor={props.openTaskEditor}
        onCancelClick={props.onCancelClick}
        onTaskNameChange={props.onTaskNameChange}
        onDescriptionChange={props.onDescriptionChange}
        onDueDateChange={props.onDueDateChange}
        onDueDateRemove={props.onDueDateRemove}
        onAddTaskClick={props.onAddTaskClick} /> :
        <button className='new-task-button' onClick={props.onNewTaskClick}>
          <i class="bi bi-plus-lg"></i>
          <p className='new-task-button-text'>Add a task</p>
        </button>}
      <TaskList lists={props.lists} selectedKey={props.selectedKey} onChangeTask={props.onChangeTask} />
    </div >
  )
}


function App() {
  const [lists, setLists] = useState([{ listId: 0, listName: 'Today', tasks: [] }]);
  const [openTaskEditor, setOpenTaskEditor] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [listName, setListName] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [selectedKey, setSelectedKey] = useState(0);
  const [searchText, setSearchText] = useState('');

  function handleMenuToggle() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
    else {
      setMenuIsOpen(true);
    }
  }

  function handleListSelect(listId) {
    setSelectedKey(listId);
    setOpenTaskEditor(false);
    setSearchText('');

  }



  function handleCreateList(listName) {

    setLists([
      ...lists,
      {
        listId: ++listId,
        listName: listName,
        tasks: []
      }]
    );
    setListName('')

  }

  function handleListNameSet(e) {
    setListName(e.target.value)
  }


  function handleTaskNameChange(e) {
    setTaskName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleDueDateChange(d) {
    setDueDate(d);

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
    setLists(
      lists.map(l => {
        if (l.listId === selectedKey) {
          return (
            {
              ...l,
              tasks: [
                ...l.tasks,
                {
                  listName: l.listName,
                  listId: l.listId,
                  id: ++taskId,
                  name: taskName,
                  description: description,
                  dueDate: dueDate,
                  done: false
                }
              ]
            }
          )
        } else
          return l
      }
      )
    );
    setTaskName('');
    setDescription('');
    setDueDate('');
  };

  function handleChangeTask(task) {
    setLists(
      lists.map(l => {
        if (l.listId == selectedKey) {
          return (
            {
              ...l,
              tasks:
                l.tasks.map(t => {
                  if (t.id == task.id) {
                    return task;
                  } else {
                    return t;
                  }
                })

            }
          )

        } else
          return l
      })
    )
  }

  function handleChangeSearchTask(task) {
    setLists(
      lists.map(l => {
        if (l.listId == task.listId) {
          return (
            {
              ...l,
              tasks:
                l.tasks.map(t => {
                  if (t.id == task.id) {
                    return task;
                  } else {
                    return t;
                  }
                })

            }
          )

        } else
          return l
      })
    )
  }

  function handleSearchTextChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className='container'>
      <Navbar
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
      />
      <Menu
        lists={lists}
        onCreateList={handleCreateList}
        listName={listName}
        onListNameSet={handleListNameSet}
        onListSelect={handleListSelect}
      />
      {searchText === '' ?
        <TodoList
          selectedKey={selectedKey}
          description={description}
          taskName={taskName}
          dueDate={dueDate}
          lists={lists}
          openTaskEditor={openTaskEditor}
          onNewTaskClick={handleNewTaskClick}
          onTaskNameChange={handleTaskNameChange}
          onDescriptionChange={handleDescriptionChange}
          onCancelClick={handleCancelClick}
          onDueDateChange={handleDueDateChange}
          onDueDateRemove={handleDueDateRemove}
          onAddTaskClick={handleTaskAddClick}
          onChangeTask={handleChangeTask}

        />
        : <SearchResults
          searchText={searchText}
          lists={lists}
          onChangeTask={handleChangeSearchTask}

        />


      }

    </div>

  )
}

export default App;
