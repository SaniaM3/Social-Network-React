import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
      {/* <Profile /> */}
      <Dialogs/>
      </div>
    </div>
  );
}

export default App;
