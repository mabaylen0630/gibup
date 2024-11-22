import React from 'react';
import './style.css';
import video from './assets/me.mp4';

const Top = () => {
    return (
        <div>


            <div className="video-container">
                <video className="video-frame" width="1000px" controls autoPlay>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <footer>
                <p>&copy; 2024 My Personal Website(try0)</p>
            </footer>
        </div>
    );
}

export default Top;
