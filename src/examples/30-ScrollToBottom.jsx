import React, { useState, useRef, useEffect } from "react";

export default function Example30() {
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef();

  const addMessage = () => {
    setMessages([...messages, `Message ${messages.length + 1}`]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <h2>Example 30 - Scroll To Bottom</h2>

      <div style={{ height: 150, overflowY: "auto", border: "1px solid black" }}>
        {messages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
        <div ref={bottomRef} />
      </div>

      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}
