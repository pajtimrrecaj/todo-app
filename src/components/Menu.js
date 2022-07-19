import './Menu.css'

function Menu({ menuIsOpen }) {
    if (menuIsOpen) {
        return (
            <div className={'menu ' + (menuIsOpen ? 'menu-open' : 'menu-close')} >
            </ div >
        )
    }


}

export default Menu;