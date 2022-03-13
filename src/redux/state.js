import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {

        profilePage: {
            postData: [{
                    id: 1,
                    message: 'Hi',
                    likesCounte: 16
                },
                {
                    id: 2,
                    message: 'Hi, how are you?',
                    likesCounte: 39
                },
                {
                    id: 3,
                    message: 'Oh, yeaa',
                    likesCounte: 82
                },
                {
                    id: 4,
                    message: 'Hello',
                    likesCounte: 11
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [{
                    id: 1,
                    name: 'Dimych'
                },
                {
                    id: 2,
                    name: 'Sasha'
                },
                {
                    id: 3,
                    name: 'Masha'
                },
                {
                    id: 4,
                    name: 'Petya'
                },
            ],
            messages: [{
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Hi are you?'
                },
                {
                    id: 3,
                    message: 'Fine, Fuck!!!'
                },
            ],
            newMessageBody: ""
        },

    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCounte: 0
        };
        this._state.profilePage.postData.push(newPost)
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export let addPostActionCreator = () => ({
    type: ADD_POST
})

export let updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
})


export let sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export let updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default store;
window.store = store;