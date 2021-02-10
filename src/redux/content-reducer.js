import { getAuthData } from './auth-reducer';

let INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state, initialized: true};
        } 
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeContent = () => (dispatch) => {
    let promise = dispatch(getAuthData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
} 

export default contentReducer;



