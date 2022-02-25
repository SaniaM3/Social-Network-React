import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="../img/audiLogo.png"></img>
            </div>
            <a href = '#home'>Home</a>
            <a href = '#News'>News Feed</a>
            <a href = '#Messages'>Messages</a>
        </div>
    )
    }

    export default Header;
