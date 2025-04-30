import React from 'react';
import '../common.css';

function Welcome() {
  return (
    <div className="container text-center">
      <h1>Welcome to the App</h1>
      <p className="mt-1">This is the welcome page.</p>
      <a href="/about" className="button">Learn More</a>
    </div>
  );
}

export default Welcome;