
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Player from './pages/Player';
import Navbar from './components/Navbar';
import 'video.js/dist/video-js.css';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
  };

  return (
    <div className={theme}>
      <Router>
        {/* show navbar on all but Landing */}
        {window.location.pathname !== '/' && (
          <Navbar theme={theme} toggleTheme={toggleTheme} />
        )}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/watch/:season/:episode" element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


