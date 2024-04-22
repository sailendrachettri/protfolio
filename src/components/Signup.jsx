import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../environment';

const URL = SERVER_URL;


const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const navigate = useNavigate();


    const handleSignup = async (e) => {
        e.preventDefault();

        const response = await fetch(`${URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ username, password, cpassword}),
        })

        const data = await response.json();

        if (!(data.success)) {
            alert(data.message);
            return;
        }

        alert("user created successful!");
        navigate("/login");
    }

    return (
        <>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder='username' value={username} onChange={(ev) => setUsername(ev.target.value)} required minLength={3} />
                <input type="password" placeholder='password' value={password} onChange={(ev) => setPassword(ev.target.value)} required minLength={6} />
                <input type="password" placeholder='confirm password' value={cpassword} onChange={(ev) => setCpassword(ev.target.value)} required minLength={6} />
                <input type="submit" value="Register" />
            </form>
        </>
    )
}

export default Signup