import { ActionTypes } from "../constants/action-type"

const initialState = {
    posts: [],
    
}


export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_POSTS: 
            return {...state, posts: action.payload.posts}
        case ActionTypes.CREATE_POST:
            const newPosts = [...state.posts, action.payload]
            return {...state, posts: newPosts}
        case ActionTypes.UPDATE_POST:
            const filterPosts = state.posts.filter((post)=> post._id !== action.payload._id)
            return {...state,posts: [...filterPosts, action.payload]}
        case ActionTypes.DELETE_POST:
            const deletedPosts = state.posts.filter(post => post._id !== action.payload._id)
            console.log(deletedPosts)
            return {...state, posts: deletedPosts}
        default:
            return state
    }
}
