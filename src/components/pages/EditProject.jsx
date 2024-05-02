import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SERVER_URL } from '../../environment';
import { toast } from 'react-toastify'

const URL = SERVER_URL

const EditProject = () => {
    // usestate 
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [link, setLink] = useState("");
    const [alt, setAlt] = useState("");
    const [files, setFiles] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();


    // fetch the user content
    useEffect(() => {
        fetch(`${SERVER_URL}/api/project/fetch/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setSummary(postInfo.summary);
                    setAlt(postInfo.alt);
                    setLink(postInfo.link);
                })
            })
    }, [id]);

    // METHODS
    const editProject = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('alt', alt);
        data.set('link', link);
        data.set('id', id);

        // check if new image is uploaded to not? if image file is not updated then use old one
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }

        const response = await fetch(`${URL}/api/project/edit`, {
            method: 'PUT',
            credentials: 'include',
            body: data
        })

        const res = await response.json();

        console.log(res);
        
        if (res.success) {
            toast.success("Project Edited successful!")
            navigate("/");

        }  else {
            toast.error("Not able to edit project!");
        }
    }


    return (
        <form onSubmit={editProject} className='add-project'>
            <div className="form-data">
                <input type="text" placeholder='Title' value={title} onChange={(ev) => setTitle(ev.target.value)} />
                <input type="text" placeholder='Summary' value={summary} onChange={(ev) => setSummary(ev.target.value)} />
                <input type="text" placeholder='Link to project' value={link} onChange={(ev) => setLink(ev.target.value)} />
                <input type="text" placeholder='Alternet text' value={alt} onChange={(ev) => setAlt(ev.target.value)} />
                <input type="file" onChange={ev => setFiles(ev.target.files)} />
                <input type="submit" value="Update" className='submit-btn' />
            </div>
        </form>
    )
}

export default EditProject