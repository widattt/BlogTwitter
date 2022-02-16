import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../redux/actions/postActions'
import './Form.css'

function Form() {
  const { user } = useSelector(state=> state.user)
  const [content, setContent ] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost({content, user}))
    setContent('')
  }
  
  return (
    <section className="form-section">
        <form onSubmit={handleSubmit} className="form">
            <textarea type='text' name='content' id='content' className='content' placeholder={`what's happening`} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button className='btn' type='submit'>Tweet</button>
        </form>
    </section>
  )
}

export default Form