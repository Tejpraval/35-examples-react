import React, { useState } from "react";

export default function Example16() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div style={{ background: color, padding: 20 }}>
      <h2>Example 16 - Background Color Picker</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
