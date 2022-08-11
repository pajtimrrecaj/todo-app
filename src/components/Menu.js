import './Menu.css'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';



function Menu({ lists, listName, onCreateList, onListSelect, onListNameSet }) {
    const [openMenu, setOpenMenu] = useState(true);
    const menuList = lists.map(list =>
        <li key={list.listId}>
            <button className='menu-item' onClick={() => onListSelect(list.listId)}>
                <i class="bi bi-list-task"></i>
                <h3 className='menu-list-name'>{list.listName}</h3>
            </button>
        </li>
    )
    return (
        <>
            {
                openMenu ?
                    <div className='menu'>
                        < button className='menu-button' onClick={() => setOpenMenu(false)}>
                            <MenuRoundedIcon className='menu-icon' fontSize='medium' />
                        </button >

                        <div className='list-section'>
                            <ul>{menuList}</ul>
                            <div className='add-list-section'>
                                <button className='add-list-button' disabled={listName == ''} onClick={() => {
                                    onCreateList(listName);
                                }
                                }>
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                                <input
                                    value={listName}
                                    className='add-list-input'
                                    placeholder='Add New List'
                                    onChange={onListNameSet}></input>
                            </div>
                        </div>



                    </div >
                    :
                    <div className='closed-menu'>
                        <button className='menu-button' onClick={() => setOpenMenu(true)}>
                            <MenuRoundedIcon className='menu-icon' fontSize='medium' />
                        </button>
                    </div>
            }
        </>
    )


}

export default Menu;