import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './style.css';

const About = () => {
    return (
        <div>

            <div className="personal-info">
                <h2>Personal Information</h2>
                <p>Name: Mark Angelo B. Baylen</p>
                <p>Email: markbaylen0630@gmail.com</p>
                <p>Mobile No#: 0929527462</p>
                <p>Location: Zone 3, San Agustin Pili Cam. Sur</p>
                <p>
                    More info: <Link to="/eme">Click here</Link>
                </p>
            </div>
            <footer>
                <p>MBAYLEN Personal Website</p>
            </footer>
        </div>
    );
};

export default About;
