/* eslint-disable react-hooks/refs */
import React, { useState, useEffect, useRef } from "react";

export default function Example28() {
  const [count, setCount] = useState(0);
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>Example 28 - Previous Value Tracker</h2>
      <p>Current: {count}</p>
      <p>Previous: {prevRef.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
