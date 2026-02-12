import React, { useState, useEffect } from "react";

export default function Example24() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Example 24 - Document Title Update</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
