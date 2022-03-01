import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

function App(props) {
  
  let postData = [
    {id: 1, message: 'Hi', likesCounte: 16},
    {id: 2, message: 'Hi, how are you?', likesCounte: 39},
    {id: 3, message: 'Oh, yeaa', likesCounte: 82},
    {id: 4, message: 'Hello', likesCounte: 11},
  ]

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
      <Routes>
      <Route path='/profile/*' element={<Profile postData = {postData}/>}/>
      <Route path='/dialogs/*' element={<Dialogs />} />
      <Route path='/news/*' element={<News/>}/>
      <Route path='/music/*' element={<Music/>}/>
      <Route path='*' element={<Profile />}/>
      <Route path='/settings/*' element={<Settings/>}/>
      </Routes>
      </div>
    </div>
  );
}


export default App;
