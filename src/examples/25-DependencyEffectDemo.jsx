import React, { useState, useEffect } from "react";

function Child({ number }) {
  useEffect(() => {
    console.log("Number changed:", number);
  }, [number]);

  return <p>Current Number: {number}</p>;
}

export default function Example25() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2>Example 25 - Dependency Effect</h2>
      <button onClick={() => setNum(num + 1)}>Change Number</button>
      <Child number={num} />
    </div>
  );
}
