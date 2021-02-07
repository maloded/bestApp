import { profileAPI } from '../API/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_UDER_PROFILE = 'SET-UDER-PROFILE';

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
        case SET_UDER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, text})
export const setUserProfile = (profile) => ({type: SET_UDER_PROFILE, profile})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;



