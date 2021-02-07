import { authAPI } from '../API/api';

let SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {...state, ...action.data, isAuth: true};
        } 
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}})

export const getAuthData = () => {
    return (dispatch) => {
        authAPI.getMe().then(data => {
            if  (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}


export default authReducer;



