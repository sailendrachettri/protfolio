import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const URL = 'http://localhost:5000'

const Addprojects = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] =  useState("");
    const [link, setLink] =  useState("");
    const [alt, setAlt] =  useState("");
    const [files, setFiles] =  useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
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

        const res = response.json();
        if(res.success){
            navigate("/");
        }
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title' value={title} onChange={(ev) => setTitle(ev.target.value)} />
            <input type="text" placeholder='Summary' value={summary} onChange={(ev) => setSummary(ev.target.value)} />
            <input type="text" placeholder='Link to project' value={link} onChange={(ev) => setLink(ev.target.value)} />
            <input type="text" placeholder='Alt Text' value={alt} onChange={(ev) => setAlt(ev.target.value)} />
            <input type="file" onChange={ev => setFiles(ev.target.files)} required />
            <input type="submit" value="Add" />
        </form>
    )
}

export default Addprojects