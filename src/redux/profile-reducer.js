import { profileAPI } from '../API/api';

const ADD_POST = 'ADD-POST';
const SET_UDER_PROFILE = 'SET-UDER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, text: `It's my post`, likesCount: '3463'},
        {id: 2, text: 'Hi, you are good!', likesCount: '0'}
    ],
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, posts: [...state.posts, {id: 4, text: action.newPostText, likesCount: 0}]};
        } 
        case SET_UDER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_UDER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;



