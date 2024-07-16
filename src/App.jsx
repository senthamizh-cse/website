import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Departments from './Departments';
import Events from './Events';
import './App.css'; // Import the CSS file

const App = () => (
    <Router>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/departments">Departments</Link></li>
                    <li><Link to="/events">Events</Link></li>
                </ul>
            </nav>
        </header>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </div>
    </Router>
);

export default App;