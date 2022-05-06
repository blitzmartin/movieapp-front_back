import { useContext } from "react";
import { UserContext } from "../App";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../Login.css';

export default function Login(props) {

  const { user, setUser, auth, setAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();


  function handleChange(e) {
    const { value, name } = e.target; //destructuring

    // for UserContext to catch the value in e.targe
    setUser((prevValue) => {
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
        username: user.username,
        password: user.password
      })
    };
    fetch("/auth/login", requestOptions)
      .then(res => {
        if (res.status === 200) {
          setAuth(true);
          console.log(auth);
          navigate('/user', { replace: true });
        }
        setUser({
          username: "",
          password: ""
        });
      });
  }

  return (
    <div className="container">
      <h2>Please enter your credentials to login:</h2>
      <input type='text' name="username" placeholder='Username' onChange={handleChange} value={user.username} />
      <input type='password' name='password' placeholder='Password' onChange={handleChange} value={user.password} />
      <button onClick={handleClick}>Login</button>
      <div className='registerMsg' >
        <Link to="/auth/register">Not a member yet? Click here and register!</Link>
      </div>
    </div>
  );
}