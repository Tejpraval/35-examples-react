import React, { useState } from "react";

export default function Example17() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Example 17 - Modal</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div style={{ border: "1px solid black", padding: 20 }}>
          <p>This is modal content</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
