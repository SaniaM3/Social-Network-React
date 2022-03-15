const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCounte: 0
            };
            state.newPostText = '';
            state.postData.push(newPost);
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}



export let addPostActionCreator = () => ({
    type: ADD_POST
})

export let updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
})

export default profileReducer;