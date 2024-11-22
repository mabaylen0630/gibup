import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from "./Navbar";
import About from './About';
import Eme from './Eme';
import Random from './Random';
import Top from './Top';
import bgmusic from './assets/bmusic.mp3';
import './style.css';



const App = () => {
    const audioRef = useRef(null); // Reference to the audio element
    const [isMusicPlaying, setIsMusicPlaying] = useState(true); // State to manage audio playback

    // Function to toggle music playback
    const toggleMusic = () => {
        if (audioRef.current) {
            if (isMusicPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsMusicPlaying(!isMusicPlaying);
        }
    };

    return (
        <div>
            {/* Background Music */}
            <audio ref={audioRef} autoPlay loop>
                <source src={bgmusic} type="audio/mp3" />
            </audio>

            {/* Router */}
            <Router>
                <header>
                <h1>こんにちは、 私の 個人ウェ ブサイトへようこそ</h1>
                <h5>(Hello and welcome to my personal website :3)</h5>
                </header>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/eme" element={<Eme />} />
                  <Route path="/random" element={<Random />} />
                  <Route path="/top" element={<Top />} />
                </Routes>
            </Router>

            {/* Music Toggle Switch */}
            <div className="music-toggle">
                <button className="off-on" onClick={toggleMusic}>
                    {isMusicPlaying ? 'Music Off' : 'Music On'}
                </button>
            </div>
        </div>
    );
};

export default App;
