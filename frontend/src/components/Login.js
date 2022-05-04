import React, { useState, useContext} from "react";
import { UserContext } from "../App";
import { Link, useNavigate  } from 'react-router-dom'
import '../Login.css';

export default function Login(props) {

  const navigate = useNavigate();
  const userAuthObj = useContext(UserContext);

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
    userAuthObj.setUserAuth((prevValue) => {
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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password
      })
    };
    fetch("/auth/login", requestOptions)
      .then(res => {
        if (res.status === 200) {
          navigate('/', { replace: true });
        }
        setUserData({
          username: "",
          password: ""
        });
      });
  }

  return (
    <div className="container">
      <h2>Please enter your credentials to login:</h2>


      <form >
        <input type='text' name="username" placeholder='Username' onChange={handleChange} value={userData.username} />
        <input type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password} />
        <button onClick={handleClick}>Login</button>
      </form>
      <div className='registerMsg' >
        <Link to="/auth/register">Not a member yet? Click here and register!</Link>
      </div>


    </div>
  );
}
