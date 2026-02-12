import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return <h3>Product: {product?.name}</h3>;
}

function Products() {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default function Example32() {
  return (
    <BrowserRouter>
      <h2>Example 32 - useParams</h2>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
