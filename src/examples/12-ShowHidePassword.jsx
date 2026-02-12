import React, { useState } from "react";

export default function Example12() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Example 12 - Show / Hide Password</h2>
      <input type={show ? "text" : "password"} placeholder="Password" />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
