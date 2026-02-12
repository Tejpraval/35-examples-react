import React, { useState, useEffect } from "react";

export default function Example21() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>Example 21 - Window Resize Tracker</h2>
      <p>Window Width: {width}px</p>
    </div>
  );
}
