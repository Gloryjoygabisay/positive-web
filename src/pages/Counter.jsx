import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Counter Page</h1>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
};

export default Counter;