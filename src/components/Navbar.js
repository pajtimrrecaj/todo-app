
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



function Navbar({ searchText, onSearchTextChange }) {



    return (
        <div className="navbar">
            <div className="navbar-left">
                <button className='home-button'>Todos</button>
            </div>
            <span className='search-bar'>
                <input
                    type="text"
                    placeholder='Search tasks'
                    className='search-field'
                    value={searchText}
                    onChange={onSearchTextChange}
                ></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" className='search-icon' />
            </span>
        </div>
    )
}

export default Navbar;