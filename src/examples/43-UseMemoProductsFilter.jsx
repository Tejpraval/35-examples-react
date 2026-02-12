import React, { useState, useMemo } from "react";

export default function Example43() {
  const [search, setSearch] = useState("");

  const products = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Product ${i}`
  }));

  const filtered = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  return (
    <div>
      <h2>Example 43 - useMemo Filter</h2>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <p>Results: {filtered.length}</p>
    </div>
  );
}
