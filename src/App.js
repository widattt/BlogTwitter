import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import ErrorNotFound from './components/ErrorNotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from './redux/actions/userActions';


function App() {

  const dispatch = useDispatch()
  const { isLogged } = useSelector(state => state.user)
  
  useEffect(() => {
    dispatch(getCurrentUser())
  },[dispatch])
  

  return (
    <Router>
      <div className="container">
          <Header />
          <Routes>
            <Route exact path='/login' element={isLogged ? <Navigate to='/' /> : <Login />} />
            <Route exact path='/register' element={isLogged ? <Navigate to='/' /> :<Register />} />
            <Route exact path='/' element={isLogged ? <Main /> : <Navigate to='/login' />} />            
            <Route exact path='*' element={<ErrorNotFound />} />            
          </Routes>
      </div>
    </Router>
  );
}

export default App;
