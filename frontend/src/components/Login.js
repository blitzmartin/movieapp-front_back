import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Link } from 'react-router-dom'
import '../Login.css';

export default function Login(props) {

  const userObj = useContext(UserContext);

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });


  function handleChange(e) {
    const { value, name } = e.target; //destructuring

    setUserData((prevValue) => {
      if (name === "username") {
        return {
          username: value,
          password: prevValue.password
        };
      } else if (name === "password") {
        return {
          username: prevValue.username,
          password: value
        };
      }
    });

    // for UserContext to catch the value in e.targe
    userObj.setUserContextValue((prevValue) => {
      if (name === "username") {
        return {
          username: value,
          password: prevValue.password
        };
      } else if (name === "password") {
        return {
          username: prevValue.username,
          password: value
        };
      }
    });

  }

  function handleClick(event) {
    setUserData({
      username: "",
      password: ""
    });
    event.preventDefault();
  }

  return (
    <div className="container">
      <h2>Please enter your credentials to login:</h2>


      <form>

        <input type='text' name="username" placeholder='Username' onChange={handleChange} value={userData.username} />
        <input type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password} />
        <button type='submit' onClick={handleClick}>Login</button>
      </form>
      <div className='registerMsg' >
        <Link to="/auth/register">Not a member yet? Click here and register!</Link>
      </div>


    </div>
  );
}
