import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import TaskList from '../TaskList/TaskList';

function Today() {
    return (
        <div>
            <h1>Title</h1>
            <button>
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
            <p>Date</p>
            <TaskList />
            <button>Add a task</button>
        </div>
    )
}

export default Today;