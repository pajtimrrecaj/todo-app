import OptionsButton from "./OptionsButton";

function TaskList() {
    return (
        <div>
            <ul>
                <li>
                    <hr />
                    <input type='checkbox'></input>
                    <h3>Task name</h3>
                    <p>Description</p>
                    <p><i>Calendar icon</i>Due date</p>
                    <OptionsButton />
                    <hr />
                </li>
            </ul>
        </div>
    )
}

export default TaskList;