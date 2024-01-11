import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'
import About from './About'

import './App.css'; // Temporarily commented out for troubleshooting

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Route components inside Routes */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<About />}/>
          {/* other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;