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
            newPostText: 'IT-Cama',
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
            newMessageBody: ''
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
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCounte: 0
            };
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newPostText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({
                id: 6,
                message: body
            });
            this._callSubscriber(this._state);
        }
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

export let updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text
})

export default store;
window.store = store;