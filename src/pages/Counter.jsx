import React from 'react';
import '../common.css';

function Counter() {
  return (
    <div className="container text-center">
      <h1>Counter</h1>
      <p className="mt-1">Click the button to increase the count.</p>
      <button className="button">Increment</button>
    </div>
  );
}

export default Counter;