import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/actions/userActions';


import './auth.css'

function Register() {

  let navigate = useNavigate();
  const { isLogged, error } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [dataRegister, setRegister ] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    
    setRegister({
      ...dataRegister,[e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(dataRegister))
    if(!isLogged) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )
    }
    navigate('/')
  }





  return (
    <section className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Enter Your Account</h2>
            {
              error && (
                <div className="error-message">Error: {`${error}`}</div>
              )
            }
            <input type="text" name='name' onChange={handleChange} required placeholder='Name' />            
            <input type="text" name='email' onChange={handleChange} required placeholder='Email' />
            <input type="password" name='password' onChange={handleChange} required placeholder='Password' />
            <button className="btn" type='submit'>Register</button>
        </form>
    </section>
  )
}

export default Register