import { ActionTypes } from "../constants/action-type"

const initialState = {
    user: null,
    isLogged: false,
    error: '',
    isLoading: true,
}


export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN: 
            return {
                ...state, 
                user: action.payload,
                isLogged: true,
                error: null
            }
            
        case ActionTypes.LOGOUT: 
            return {
                ...state,
                isLogged: false,
                user: null,
            }
        case ActionTypes.CURRENT_USER: 
            return {
                ...state,
                user: action.payload || null,
                isLogged: action.payload ? true : false,
            }
        
        case ActionTypes.ERROR_MESSAGE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
