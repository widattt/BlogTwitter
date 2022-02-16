import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/userActions'
import { ActionTypes } from '../redux/constants/action-type'
import './Header.css'

function Header() {

  const { isLogged, user, error } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if(error) {
      setTimeout(function() {
        dispatch({
          type: ActionTypes.ERROR_MESSAGE,
          payload: ''
      })
      }, 3000)
    }
  }, [dispatch,error])


  return (
    <header className="header">
        <h1 className="logo"><Link to='/' href="">twitter</Link></h1>
        <nav>
            <ul className="main-nav">
                {
                  !isLogged ? (
                    <>
                      <li><Link to='/login' >Login</Link></li>
                      <li><Link to='/register' >Register</Link></li>
                    </>
                  ) : (
                    <>
                      <li><span className='user-name'>Hello, {user}</span></li>
                      <li><Link to='/login' onClick={handleLogout} >Sign Out</Link></li>
                    </>
                  )
                }
                
            </ul>
        </nav>
    </header>
  )
}

export default Header