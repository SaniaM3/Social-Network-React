import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to = '/'>Profile</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to = '/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/settings'>Settings</NavLink>
            </div>
        </div>
        
    )
}


export default NavBar;