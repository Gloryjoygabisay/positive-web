import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Counter from './pages/Counter';
import Introduction from './pages/Introduction';
import ExploreStories from './pages/ExploreStories';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
  return (
    <Router>
      <div className="sidebar">
        <Link to="/">Welcome</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
      </div>
      <div style={{ marginLeft: '250px', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <div className="App">
          <img src="/src/assets/moon-image.png" alt="Moon" className="moon-image" />
          <Introduction />
          <ExploreStories />
          <Favorites />
        </div>
      </div>
    </Router>
  );
}

export default App;
