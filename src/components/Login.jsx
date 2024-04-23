import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext'
import { SERVER_URL } from '../environment';

const URL = SERVER_URL

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUserInfo } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${URL}/api/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        const data = await response.json();

        if (data.success) {
            setUserInfo(data);
            alert("Login sucessful!");
            navigate("/");
        } else {
            alert(data.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='form-data'>
                    <input type="text" placeholder='Username' className='form-input' value={username} onChange={(ev) => setUsername(ev.target.value)} required minLength={4} />
                    <input type="password" placeholder='Password' className='form-input' value={password} onChange={(ev) => setPassword(ev.target.value)} required minLength={4} />
                    <input type="submit" value="Login" className='submit-btn' />
                </div>
            </form>
        </>
    )
}

export default Login