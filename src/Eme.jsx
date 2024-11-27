import React from 'react';
import './style.css';
import prankvid from './assets/roll.mp4';

const Eme = () => {
    return (
        <div>
            <div className="video-container">
            <video className="video-frame" width="1500px" controls autoPlay loop>
                    <source src={prankvid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <footer>
                <p>MBAYLEN Personal Website</p>
            </footer>
        </div>
    );
};

export default Eme;
