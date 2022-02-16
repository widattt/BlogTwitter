import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../redux/actions/postActions'
import Form from './Form'
import PostList from './PostList'

function Main() {

    
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])


  return (
    <div>
        <Form />
        <PostList />
        
    </div>
  )
}

export default Main