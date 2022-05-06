import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from 'react-router-dom'
import '../Login.css';

export default function Logout() {
  const { auth, setAuth } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ""
    };
    fetch("/auth/logout", requestOptions)
      .then(res => {
        if (res.status === 200) {
          setAuth(false);
          console.log(auth);
          navigate('/auth/login', { replace: true });
        }
      });
  }

  return (
      <button className="logoutBtn" onClick={handleClick}>Logout</button>
  );
}
