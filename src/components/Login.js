import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/userActions'
import { useNavigate } from "react-router-dom";
import './auth.css'

function Login() {

  let navigate = useNavigate();
  const { isLogged, error } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [dataLogin, setDataLogin ] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    
    setDataLogin({
      ...dataLogin,[e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(dataLogin))
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
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Enter Your Account</h2>
            {
              error && (
                <div className="error-message">Error: {error}</div>
              )
            }
            <input type="text" name='email' required placeholder='Email' value={dataLogin.email} onChange={handleChange} />
            <input type="password" name='password' required placeholder='Password' value={dataLogin.password} onChange={handleChange} />
            <button className="btn" type='submit'>Login</button>
        </form>
    </section>
  )
}

export default Login