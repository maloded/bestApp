const ADD_MESSAGE = 'ADD-MESSAGE'

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
    switch (action.type ) {
        case ADD_MESSAGE: {
            return {
                ...state, messages: [...state.messages, {id: 3, message: action.newMessage}]
            }
        }
    default:
        return state;
    }
}

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage});

export default dialogsReducer;


