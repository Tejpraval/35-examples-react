import React from "react";

const ProductCard = ({ title, price, inStock }) => {
  return (
    <div style={{ border: "1px solid #000", padding: 16, margin: 10 }}>
      <h3>{title}</h3>
      <p>₹{price}</p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
