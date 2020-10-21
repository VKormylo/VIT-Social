import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [{
                    id: 1,
                    message: "Hi, how are you?",
                    likesCount: 15
                },
                {
                    id: 2,
                    message: "It's my first post",
                    likesCount: 15
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            messages: [
                {id: 1, user: "me", message: "Hi"},
                {id: 2, user: "me", message: "How is your it-kamasutra?"},
                {id: 4, user: "friend", message: "Yo"},
                {id: 5, user: "friend", message: "Hi, how are you?"},
                {id: 6, user: "me", message: "Good"}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer (pattern)
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;