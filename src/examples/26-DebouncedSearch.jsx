import React, { useState, useEffect } from "react";

export default function Example26() {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div>
      <h2>Example 26 - Debounced Search</h2>
      <input
        placeholder="Type..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Debounced Value: {debounced}</p>
    </div>
  );
}
