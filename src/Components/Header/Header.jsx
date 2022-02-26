import s from './Header.module.css';


const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src='https://www.pngplay.com/wp-content/uploads/6/Audi-Logo-PNG-HD-Quality.png' className={s.logo}></img>
            </div>
        </div>
    )
    }

    export default Header;
