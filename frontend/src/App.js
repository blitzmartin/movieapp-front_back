import React, { useState, useEffect } from "react";
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from "./components/Register";
import NotFound from './components/NotFound'
import OneMovie from './components/OneMovie'
import {UserMain} from './components/UserMain'
export const UserContext = React.createContext();

function App() {

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <div className='Header'>
            <h1>The Movie App</h1>
            <ul className="nav-bar">
              <li>
                <NavLink
                  className={(data) => (data.isActive ? "active" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                    <NavLink
                      className={(data) => (data.isActive ? "active" : "")}
                      to="/auth/login"
                    >
                      Login
                    </NavLink>
                  </li>
              <li><Logout /></li>
            </ul>
          </div>


          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Main />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='/movies/:id' element={<OneMovie />} />
            <Route path='/user' element={<UserMain /> } />
          </Routes>
        </Router>
        <Footer />
        </UserContext.Provider>
    </>
  );
}

export default App;
