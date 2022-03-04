let rerenderEntireTree = () => {
    console.log('state changed');
}

const state = {
    
    profilePage: {
        postData : [
            {id: 1, message: 'Hi', likesCounte: 16},
            {id: 2, message: 'Hi, how are you?', likesCounte: 39},
            {id: 3, message: 'Oh, yeaa', likesCounte: 82},
            {id: 4, message: 'Hello', likesCounte: 11},
          ],
        newPostText: 'IT-Cama',
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

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCounte: 0
    };
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
} 


export default state;