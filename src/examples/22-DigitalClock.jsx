import React, { useState, useEffect } from "react";

export default function Example22() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Example 22 - Digital Clock</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}
