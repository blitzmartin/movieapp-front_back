import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Link, useNavigate } from 'react-router-dom'
import '../Login.css';

export default function Login(props) {

  const { setUser, setAuth } = useContext(UserContext);
  const [userData, setUserData] = useState({
    username:"", 
    password:""
  });
  const navigate = useNavigate();
  function handleChange(e) {
    const { value, name } = e.target; //destructuring
    // for UserContext to catch the value in e.targe
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
  }


  function handleClick() {
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
          setAuth(true);
          setUser(userData.username)
          navigate('/user', { replace: true });
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
      <input type='text' name="username" placeholder='Username' onChange={handleChange} value={userData.username} />
      <input type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password} />
      <button onClick={handleClick}>Login</button>
      <div className='registerMsg' >
        <Link to="/auth/register">Not a member yet? Click here and register!</Link>
      </div>
    </div>
  );
}