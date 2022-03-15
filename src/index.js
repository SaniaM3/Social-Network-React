
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App 
    postData = {store.getState().profilePage.postData} 
    newPostText = {store.getState().profilePage.newPostText}
    dialogs = {store.getState().dialogsPage.dialogs}
    messages = {store.getState().dialogsPage.messages}
    dispatch = {store.dispatch.bind(store)}
    newMessageBody = {store.getState().dialogsPage.newMessageBody}
    />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state);
});






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



