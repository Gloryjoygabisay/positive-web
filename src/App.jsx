import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Counter from './pages/Counter';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Welcome</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default App;
