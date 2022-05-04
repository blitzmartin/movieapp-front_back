import React, { useState } from "react";
import '../Login.css';

export default function Register(props) {

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
        setUserData({
            username: "",
            password: ""
        });
        event.preventDefault();
    }

    return (
        <div className="container">
            <h2>Please enter your credentials to register:</h2>


            <form action="/auth/register" method="post">
                <input type='text' name="username" placeholder='Username' onChange={handleChange} value={userData.username} />
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password} />
                <button type='submit' onClick={handleClick}>Register</button>
            </form>
        </div>
    );
}
