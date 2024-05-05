import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { SERVER_URL } from '../../environment'

const AddTechStack = () => {
    const [skillname, setSkillname] = useState("");
    const [highlight, setHighlight] = useState("");

    // METHODS
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${SERVER_URL}/api/project/addskills`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            } ,
            body:JSON.stringify({skillname, highlight})

        })

        const res = await response.json();

        if (response.ok) {
            toast.success(res.message);

            setHighlight("");
            setSkillname("");

        } else {
            toast.error(res.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='form-data'>
                    <input type="text" placeholder='Add skill' value={skillname} onChange={(ev) => setSkillname(ev.target.value)} />
                    <select value={highlight} onChange={(ev) => setHighlight(ev.target.value)}>
                        <option value="false">Select</option>
                        <option value="true">Highlight</option>
                    </select>
                    <input type="submit" value="Add Now" className='submit-btn' />
                </div>
            </form>
        </>
    )
}

export default AddTechStack