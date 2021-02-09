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
            return {...state, ...action.payload};
        } 
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthData = () => {
    return (dispatch) => {
        authAPI.getMe().then(data => {
            if  (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.loginUser(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthData())
        }
    })
} 

export const logout = () => {
    return (dispatch) => {
        authAPI.logoutUser().then(data => {
            if  (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;



