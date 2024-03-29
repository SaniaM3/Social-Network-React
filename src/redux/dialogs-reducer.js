const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({
            id: 6,
            message: body
            
        });
        return state;
        default:
            return state;
    }
}



export let sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export let updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;