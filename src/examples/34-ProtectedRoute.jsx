import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function Dashboard() {
  return <h3>Welcome to Dashboard</h3>;
}

function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/" />;
}

export default function Example34() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <h2>Example 34 - Protected Route</h2>
      <button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? "Logout" : "Login"}
      </button>

      <Routes>
        <Route path="/" element={<h3>Home Page</h3>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
