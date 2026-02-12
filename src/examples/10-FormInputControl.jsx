import React, { useState } from "react";

export default function Example10() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Example 10 - Controlled Input</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>You typed: {name}</p>
    </div>
  );
}
