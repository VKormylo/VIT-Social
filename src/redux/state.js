let rerenderEntireTree = () => {
    console.log('State was changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 15 },
            { id: 2, message: "It's my first post", likesCount: 15 }
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Vitaliy" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Viktor" },
            { id: 6, name: "Valera" }
        ],
        messages: [
            { id: 1, user: "me", message: "Hi" },
            { id: 2, user: "me", message: "How is your it-kamasutra?" },
            { id: 4, user: "friend", message: "Yo" },
            { id: 5, user: "friend", message: "Hi, how are you?" },
            { id: 6, user: "me", message: "Good" }
        ],
        newMessageText: ''
    }
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
        user: "me"
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // observer (pattern)
}


export default state;