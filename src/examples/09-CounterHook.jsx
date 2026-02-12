import React, { useState } from "react";

export default function Example09() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Example 09 - useState Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
