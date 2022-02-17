import { ActionTypes } from "../constants/action-type"

import axios from "axios"

export const login = (data) => async (dispatch) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://projectblogmern.herokuapp.com/api/v1/auth/login',
            data: data,
        })

        
        const token = response.data.data.token
        
        localStorage.setItem('token', token)
        dispatch({
            type: ActionTypes.LOGIN,
            payload: response.data.data.username
        })
        
    } catch (error) {
        dispatch({
            type: ActionTypes.ERROR_MESSAGE,
            payload: error.response.data.message
        })
    }

}

export const register = (data) => async (dispatch) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://projectblogmern.herokuapp.com/api/v1/auth/register',
            data: data
        })

        
        const token = response.data.data.token
        
        localStorage.setItem('token', token)
        dispatch({
            type: ActionTypes.LOGIN,
            payload: response.data.data.username
        })
        
    } catch (error) {
        dispatch({
            type: ActionTypes.ERROR_MESSAGE,
            payload: error.response.data.message
        })
    }

}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch({
        type: ActionTypes.LOGOUT,
    })
}

export const getCurrentUser = () => async (dispatch) => {
    
    try {
        const token = localStorage.getItem('token')
        const response = await axios({
            method: 'get',
            url: 'https://projectblogmern.herokuapp.com/api/v1/auth',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        dispatch({
            type: ActionTypes.CURRENT_USER,
            payload: response.data.data.user.username
        })
        
    } catch (error) {
        console.log(error)
    }
}