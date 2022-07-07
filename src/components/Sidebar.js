import './Sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Sidebar() {
    return (
        <div className='sidebar'>
            <button className='sidebar-button'>
                <FontAwesomeIcon icon={faBars} flip="horizontal" />
            </button>
            <div>

            </div>
        </div>
    )
}

export default Sidebar;