import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'
import About from './About'
import Energy from './Energy'
import Relaxation from './Relaxation'
import BreathWork from './BreathWork'
import Why from './Why'

import './App.css'; // Temporarily commented out for troubleshooting

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Route components inside Routes */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<About />}/>
          <Route exact path='/breath-work' element={<BreathWork />}/>
          <Route exact path='/why' element={<Why />}/>

          <Route exact path="/Energy" element={<Energy />}/>
          <Route exact path="/Relaxation" element={<Relaxation />}/>
          {/* other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;