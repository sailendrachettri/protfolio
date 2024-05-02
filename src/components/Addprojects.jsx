import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../environment';
import {toast} from 'react-toastify'

const URL = SERVER_URL

const Addprojects = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [link, setLink] = useState("");
    const [alt, setAlt] = useState("");
    const [files, setFiles] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.set('title', title)
        data.set('summary', summary);
        data.set('link', link);
        data.set('alt', alt);
        data.set('file', files[0]);

        const response = await fetch(`${URL}/api/project/add`, {
            method: 'POST',
            credentials: 'include',
            body: data
        })

        
        const res = await response.json();
        if (res.success) {
            toast.success("Project added successful!")
            navigate("/");
        }
    }


    return (
        <form onSubmit={handleSubmit} className='add-project'>
            <div className="form-data">
                <input type="text" placeholder='Title' value={title} onChange={(ev) => setTitle(ev.target.value)} />
                <input type="text" placeholder='Summary' value={summary} onChange={(ev) => setSummary(ev.target.value)} />
                <input type="text" placeholder='Link to project' value={link} onChange={(ev) => setLink(ev.target.value)} />
                <input type="text" placeholder='Alternet text' value={alt} onChange={(ev) => setAlt(ev.target.value)} />
                <input type="file" onChange={ev => setFiles(ev.target.files)} required />
                <input type="submit" value="Add" className='submit-btn' />
            </div>
        </form>
    )
}

export default Addprojects