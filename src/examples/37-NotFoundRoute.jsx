import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function Example37() {
  return (
    <BrowserRouter>
      <h2>Example 37 - 404 Page</h2>
      <Link to="/">Home</Link>

      <Routes>
        <Route path="/" element={<h3>Home Page</h3>} />
        <Route path="*" element={<h3>404 - Page Not Found</h3>} />
      </Routes>
    </BrowserRouter>
  );
}
