import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function Layout() {
  return (
    <div>
      <header style={{ background: "#222", color: "#fff", padding: 10 }}>
        <Link to="/" style={{ color: "#fff" }}>Home</Link> |
        <Link to="/about" style={{ color: "#fff" }}> About</Link>
      </header>
      <Outlet />
      <footer style={{ background: "#eee", padding: 10 }}>
        Footer Section
      </footer>
    </div>
  );
}

export default function Example36() {
  return (
    <BrowserRouter>
      <h2>Example 36 - Layout with Outlet</h2>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h3>Home Page</h3>} />
          <Route path="about" element={<h3>About Page</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
