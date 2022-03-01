import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

// let postData = [
//   {id: 1, message: 'Hi', likesCounte: 16},
//   {id: 2, message: 'Hi, how are you?', likesCounte: 39},
//   {id: 3, message: 'Oh, yeaa', likesCounte: 82},
//   {id: 4, message: 'Hello', likesCounte: 11},
// ]

// let dialogs = [
//   {id: 1, name: 'Dimych'},
//   {id: 2, name: 'Sasha'},
//   {id: 3, name: 'Masha'},
//   {id: 4, name: 'Petya'},
// ]

// let messages = [
//   {id: 1, message: 'Hi'},
//   {id: 2, message: 'Hi are you?'},
//   {id: 3, message: 'Fine, Fuck!!!'},
// ]
// let postData = [
//   {id: 1, message: 'Hi', likesCounte: 16},
//   {id: 2, message: 'Hi, how are you?', likesCounte: 39},
//   {id: 3, message: 'Oh, yeaa', likesCounte: 82},
//   {id: 4, message: 'Hello', likesCounte: 11},
// ]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App postData = {state.profilePage.postData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
