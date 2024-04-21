import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <div className="services-section">
                <h1>Available Services</h1>
                <div className="services">

                    <div className="service">
                        <span className="material-symbols-outlined">responsive_layout</span>
                        <h3>Static Website Development</h3>
                        <div>Expertly crafted, responsive static websites that captivate your audience and elevate your
                            online presence.</div>
                        <Link to="https://wa.me/9832795894?text=Hi%20Sailendra,%20I%20need%20to%20build%20a%20Static%20website,%20Let's%20discuss%20requirements"
                            target="_blank" className="viwe-project-btn"><button>Hire Now</button></Link>
                    </div>
                    <div className="service">
                        <span className="material-symbols-outlined">memory</span>
                        <h3>Dynamic Website Development</h3>
                        <div>Powerful, feature-rich dynamic websites tailored to your business needs, built with the latest
                            technologies.</div>
                        <Link to="https://wa.me/9832795894?text=Hi%20Sailendra,%20I%20need%20to%20build%20a%Dynamic%20website,%20Let's%20discuss%20requirements"
                            target="_blank" className="viwe-project-btn"><button>Hire Now</button></Link>
                    </div>
                    <div className="service">
                        <span className="material-symbols-outlined">mist</span>
                        <h3>Fullstack Web Application Development</h3>
                        <div>Custom, scalable web applications that seamlessly blend front-end and back-end functionality.
                        </div>
                        <Link to="https://wa.me/9832795894?text=Hi%20Sailendra,%20I%20need%20to%20build%20a%Fullstack%20web%20application,%20Let's%20discuss%20requirements"
                            target="_blank" className="viwe-project-btn"><button>Hire Now</button></Link>
                    </div>
                    <div className="service">
                        <span className="material-symbols-outlined">deployed_code</span>
                        <h3>Domain and Hosting</h3>
                        <div>Reliable domain and hosting solutions to establish a strong online presence for your business.
                        </div>
                        <Link to="https://wa.me/9832795894?text=Hi%20Sailendra,%20I%20need%20to%publish%4my%20website,%20Let's%20discuss%20requirements"
                            target="_blank" className="viwe-project-btn"><button>Hire Now</button></Link>
                    </div>
                    <div className="service">
                        <span className="material-symbols-outlined">stacks</span>
                        <h3>API Integration</h3>
                        <div>Seamless integration of third-party APIs to streamline your operations and enhance your digital
                            ecosystem.</div>
                        <Link to="https://wa.me/9832795894?text=Hi%20Sailendra,%20I%20need%20to%20Integrate%20a%20API%20in%20%my%20application,%20Let's%20discuss%20requirements"
                            target="_blank" className="viwe-project-btn"><button>Hire Now</button></Link>
                    </div>
                    <div className="service">
                        <span className="material-symbols-outlined">communication</span>
                        <h3>Customer Supprot 24X7</h3>
                        <div>Dedicated support is available around the clock to ensure your satisfaction and the smooth
                            operation of your digital assets.</div>
                        <Link to="https://wa.me/9832795894?text=Hi%20Sailendra,%customer%20support%20required"
                            target="_blank" className="viwe-project-btn"><button>Hire Now</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services