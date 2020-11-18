const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [{
            id: 1,
            name: "Vitaliy"
        },
        {
            id: 2,
            name: "Andrey"
        },
        {
            id: 3,
            name: "Sveta"
        },
        {
            id: 4,
            name: "Sasha"
        },
        {
            id: 5,
            name: "Viktor"
        },
        {
            id: 6,
            name: "Valera"
        }
    ],
    messages: [{
            id: 1,
            user: "me",
            message: "Hi"
        },
        {
            id: 2,
            user: "me",
            message: "How is your it-kamasutra?"
        },
        {
            id: 4,
            user: "friend",
            message: "Yo"
        },
        {
            id: 5,
            user: "friend",
            message: "Hi, how are you?"
        },
        {
            id: 6,
            user: "me",
            message: "Good"
        }
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body}],
                newMessageBody: ''
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogsReducer;