// import { rerenderEntireTree } from "../render";

import { rerenderEntireTree } from "../render";

const state = {
    profilePage: {
        postData : [
            {id: 1, message: 'Hi', likesCounte: 16},
            {id: 2, message: 'Hi, how are you?', likesCounte: 39},
            {id: 3, message: 'Oh, yeaa', likesCounte: 82},
            {id: 4, message: 'Hello', likesCounte: 11},
          ],
        newPostText: 'IT-Cama'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Petya'},
          ],
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi are you?'},
            {id: 3, message: 'Fine, Fuck!!!'},
          ]
    },
    
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCounte: 0
    };
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state);
}

export default state;