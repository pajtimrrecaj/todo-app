import TaskList from '../TaskList/TaskList';
import TaskEditor from '../TaskEditor/TaskEditor';
import OptionsButton from '../OptionsButton/OptionsButton'


function TodoList() {

    function handleAddTaskClick() {

    }

    return (
        <div>
            <h1>Title</h1>
            <TaskList />
            <button onClick={handleAddTaskClick}>Add a task</button>
            <TaskEditor />
            <OptionsButton />
        </div>

    )
}

export default TodoList;