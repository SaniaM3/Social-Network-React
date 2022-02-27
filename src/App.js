import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
      <Routes>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/dialogs' element={<Dialogs/>}/>
      <Route path='*' element={<Profile />}/>
      </Routes>
      </div>
    </div>
  );
}


export default App;
