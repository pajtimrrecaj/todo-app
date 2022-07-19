import { faBars } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



function Navbar({ onMenuToggle }) {



    return (
        <div className="navbar">
            <div className="navbar-left">
                <button className='menu-button' onClick={onMenuToggle}>
                    <FontAwesomeIcon icon={faBars} flip="horizontal" className="menu-icon" />
                </button>

                <button className='home-button'>Todos</button>
            </div>
            <span className='search-bar'>
                <input type="text" placeholder='Search' className='search-field'></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" className='search-icon' />
            </span>
        </div>
    )
}

export default Navbar;