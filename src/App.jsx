import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to Glory's Website!</h1>
      <p>Enjoy the bright and cheerful experience!</p>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>This is a cheerful website created to spread joy and positivity!</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Counter Page</h1>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
}

function App() {
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
}

export default App;
