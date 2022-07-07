
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



function Navbar() {
    return (
        <div className="navbar">
            <button className='home-button'>Todos</button>
            <span className='search-bar'>
                <input type="text" placeholder='Search' className='search-field'></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" className='search-icon' />
            </span>
        </div>
    )
}

export default Navbar;