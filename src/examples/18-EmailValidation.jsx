import React, { useState } from "react";

export default function Example18() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Invalid email format");
    } else {
      setError("Valid email ✅");
    }
  };

  return (
    <div>
      <h2>Example 18 - Email Validation</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button onClick={validate}>Validate</button>
      <p>{error}</p>
    </div>
  );
}
