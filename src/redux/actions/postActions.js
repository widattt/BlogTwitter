import { ActionTypes } from "../constants/action-type";
import axios from 'axios'


export const fetchPosts = () => async (dispatch) => {
    
    try {
        const response = await axios.get('/api/v1/post')
        
        dispatch({
            type: ActionTypes.FETCH_POSTS,
            payload: response.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = ({content, user}) => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const response = await axios({
            method: 'post',
            url: 'api/v1/post/',
            data: { content },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const author = {_id: response.data.data.newPost.author, name: user}
        
        dispatch({
            type: ActionTypes.CREATE_POST,
            payload: {...response.data.data.newPost, author}
        })
    } catch (error) {
        console.log(error)
    }
}


export const updatePost = (dataUpdate) => async (dispatch) => {
    const { id, content, user } = dataUpdate
    try {
        const token = localStorage.getItem('token')
        const response = await axios({
            method: 'put',
            url: `api/v1/post/${id}`,
            data: { content },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const author = {_id: response.data.data.postUpdate.author, name: user}
        
        
        dispatch({
            type: ActionTypes.UPDATE_POST,
            payload: {...response.data.data.postUpdate, author}
        })
    } catch (error) {
        
    }
}

export const deletePost = ({id}) => async (dispatch) => {
    
    try {
        const token = localStorage.getItem('token')
        const response = await axios({
            method: 'delete',
            url: `api/v1/post/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        
        
        
        dispatch({
            type: ActionTypes.DELETE_POST,
            payload: response.data.deletedPost
        })
    } catch (error) {
        
    }
}