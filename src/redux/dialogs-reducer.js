let initialState = {
    dialogs: [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Dimych'}
    ],
    messages: [
        {id: 1, message: 'Hello, I am cool!'},
        {id: 2, message: 'Hew are you?'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    return state;
}

export default dialogsReducer;


