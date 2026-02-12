import React, { useState } from "react";

export default function Example14() {
  const [open, setOpen] = useState(null);

  const data = [
    { id: 1, title: "Section 1", content: "Content 1" },
    { id: 2, title: "Section 2", content: "Content 2" },
  ];

  return (
    <div>
      <h2>Example 14 - Accordion</h2>
      {data.map((item) => (
        <div key={item.id}>
          <h3 onClick={() => setOpen(open === item.id ? null : item.id)}>
            {item.title}
          </h3>
          {open === item.id && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
