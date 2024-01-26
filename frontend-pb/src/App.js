import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'
import About from './About'
import Education from './Education'
import AudioRecording from './AudioRecording'
import AudioLink from './AudioLink'
import ArticleDetail from './ArticleDetail'
import StartHere from './StartHere'

import './App.css'; // Temporarily commented out for troubleshooting

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Route components inside Routes */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/start-here" element={<StartHere />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<About />}/>
          <Route exact path="/education" element={<Education />}/>
          <Route exact path="/education/:articleId" element={<ArticleDetail />} />
          <Route exact path='/audio-recording' element={<AudioRecording />}/>
          <Route exact path="/audio-link/:type" element={<AudioLink />}/>


          {/* other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;