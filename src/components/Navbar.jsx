import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/"><i class="bi bi-exclude"></i> SAILENDRA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#project-section">Projects</Link>
                            </li>
                        </ul>
                        <div className='mx-4'>
                        <Link className='btn btn-outline-dark mx-2'> <i className="bi bi-github"></i> Github</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar