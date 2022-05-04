import React, { useState} from "react";
import { useNavigate  } from 'react-router-dom'
import '../Login.css';


export default function Register(props) {

    const navigate = useNavigate();
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
        fetch("/auth/register", requestOptions)
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
            <h2>Please enter your credentials to register:</h2>


            <form>
                <input type='text' name="username" placeholder='Username' onChange={handleChange} value={userData.username} />
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password} />
                <button onClick={handleClick}>Register</button>
            </form>
        </div>
    );
}
