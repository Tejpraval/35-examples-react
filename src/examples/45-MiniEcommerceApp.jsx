import React, { useState, useEffect } from "react";

export default function Example45() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Example 45 - Mini Ecommerce</h2>

      <input
        placeholder="Search product..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <p>Cart Items: {cart.length}</p>

      {filtered.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
