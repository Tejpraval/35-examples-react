import React, { useRef, useEffect } from "react";

export default function Example27() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Example 27 - Focus Input</h2>
      <input ref={inputRef} placeholder="Auto focused" />
    </div>
  );
}
