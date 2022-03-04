let store = {
    _state: {
    
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
        
    },
    _callSubscriber () {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCounte: 0
        };
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCounte: 0
            };
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;


