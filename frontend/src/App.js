import React, { useState, useContext } from "react";
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from "./components/Register";
import NotFound from './components/NotFound'
import OneMovie from './components/OneMovie'
import {UserMain} from './components/UserMain'

//UserContext to store credentials
export const UserContext = React.createContext();

//RequireAuth context var to check if user is logged in  NOT WORKING
export const RequireAuth = ({children}) => {
  const location = useLocation()
  const { auth } = useContext(UserContext);
  if(auth === false) {
    return <Navigate to="/auth/login" state={{from: location}} replace />
  }
}


function App() {

  //setting user credentials object to empty strings
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  // boolean var to check if user is logged in
  const [auth, setAuth] = useState(false)

  return (
    <>
      <UserContext.Provider value={{ user, setUser, auth, setAuth }}>
        <Router>
          <div className='Header'>
            <h1>The Movie App</h1>
            <ul className="nav-bar">
              <li key="Home">
                <NavLink
                  className={(data) => (data.isActive ? "active" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li key="Login">
                    <NavLink
                      className={(data) => (data.isActive ? "active" : "")}
                      to="/auth/login"
                    >
                      Login
                    </NavLink>
                  </li>
              <li key="Logout"><Logout /></li>
            </ul>
          </div>


          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Main />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='/movies/:id' element={<OneMovie />} />
            <Route path='/user' element={<Navigate><UserMain /></Navigate>} />
          </Routes>
        </Router>
        <Footer />
        </UserContext.Provider>
    </>
  );
}

export default App;
