
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './TaskList.css'
import './SearchResults.css';


export default function SearchResults({ searchText, lists, onChangeTask }) {


    return (
        <div className='search-results-page'>
            <h1 className='search-results-header'>Search results for '{searchText}'</h1>
            <hr></hr>
            <ul>
                {lists.map(l => {

                    const results = (l.tasks.filter(t => t.name.startsWith(searchText)));
                    console.log(results);
                    return results.map(r =>

                        <li key={r.id}>

                            <div className='listed-task'>
                                <input type='checkbox' checked={r.done} onChange={e => {
                                    onChangeTask({
                                        ...r,
                                        done: e.target.checked
                                    });
                                }}>
                                </input>
                                <div className="listed-task-data">
                                    <div className='listed-task-header'>
                                        <p className={r.done ? "listed-task-name-done" : "listed-task-name"}>{r.name}</p>
                                        <p className='listed-task-list-name'>{r.listName}</p>
                                    </div>

                                    <p className="listed-task-description">{r.description}</p>
                                    {typeof r.dueDate == 'object' &&
                                        <div className="listed-task-date">
                                            <CalendarMonthIcon className='listed-task-calendar-icon'
                                                sx={{ fontSize: 18, color: 'gray' }} />
                                            <p className='listed-task-date-text'>{typeof r.dueDate == 'object' ? r.dueDate.toDateString() : r.dueDate}</p>
                                        </div>
                                    }
                                </div>

                            </div>
                            <hr />
                        </li>



                    )
                }

                )}
            </ul>

        </div>
    )
}