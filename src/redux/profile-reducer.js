let ADD_POST = 'ADD-POST';
let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, text: `It's my post`, likesCount: '3463'},
        {id: 2, text: 'Hi, you are good!', likesCount: '0'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, posts: [...state.posts, {id: 4, text: state.newPostText, likesCount: 0}], newPostText: ''};
        } 
        case UPDATE_POST_TEXT: {
            return {...state, newPostText: action.text};
        }   
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({type: UPDATE_POST_TEXT, text})

export default profileReducer;



