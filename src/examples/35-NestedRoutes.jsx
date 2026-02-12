import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h3>Dashboard</h3>
      <nav>
        <Link to="profile">Profile </Link> |
        <Link to="settings"> Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <p>User Profile Page</p>;
}

function Settings() {
  return <p>Settings Page</p>;
}

export default function Example35() {
  return (
    <BrowserRouter>
      <h2>Example 35 - Nested Routes</h2>
      <Routes>
        <Route path="/" element={<h3>Home</h3>} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
