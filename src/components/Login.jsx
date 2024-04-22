import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const URL = 'http://localhost:5000';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const response = await fetch(`${URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({username, password})
        })

        const data = await response.json();

        if(data.success){
            alert("Login sucessful!");
            navigate("/");
        } else{
            alert(data.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' value={username} onChange={(ev) => setUsername(ev.target.value)} required minLength={4} />
                <input type="password" placeholder='Password' value={password} onChange={(ev) => setPassword(ev.target.value)} required minLength={4} />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Login