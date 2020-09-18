let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 15 },
            { id: 2, message: "It's my first post", likesCount: 15 }
        ],
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
            { id: 3, user: "friend", message: "Yo" },
            { id: 3, user: "friend", message: "Hi, how are you?" },
            { id: 3, user: "me", message: "Good" }
        ]
    }
};

export default state;