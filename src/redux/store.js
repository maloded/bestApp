import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: `It's my post`, likesCount: '3463'},
                {id: 2, text: 'Hi, you are good!', likesCount: '0'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber () {
        console.log('state changed');
    },
    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    } 
}

