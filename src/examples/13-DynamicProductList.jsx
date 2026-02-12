import React, { useState } from "react";

export default function Example13() {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (!name.trim()) return;
    setProducts([...products, { id: Date.now(), name }]);
    setName("");
  };

  return (
    <div>
      <h2>Example 13 - Dynamic Product List</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
      />
      <button onClick={addProduct}>Add</button>

      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
