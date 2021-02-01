const SEND_MESSAGE = 'SEND-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body}],
                newMessageBody: ''
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});

export default dialogsReducer;