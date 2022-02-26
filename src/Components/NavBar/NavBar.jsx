import s from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={s.nav}>
            <div className={s.item}>
                <a href = '#1'>Profile</a>
            </div>
            <div className={s.item}>
                <a href = '#2'>Messages</a>
            </div>
            <div className={s.item}>
                <a href = '#3'>News</a>
            </div>
            <div className={s.item}>
                <a href = '#3'>Music</a>
            </div>
            <div className={s.item}>
                <a href = '#3'>Settings</a>
            </div>
        </div>
        
    )
}


export default NavBar;