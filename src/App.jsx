import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Introduction from './pages/Introduction';
import ExploreStories from './pages/ExploreStories';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
  return (
    <Router>
      <div className="sidebar">
        <Link to="/introduction">Introduction</Link>
        <Link to="/explorestories">Explore Stories</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div style={{ marginLeft: '250px', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/explorestories" element={<ExploreStories />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
