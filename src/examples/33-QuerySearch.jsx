import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";

function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setParams({ q: e.target.value })}
        placeholder="Search..."
      />
      <p>Searching for: {query}</p>
    </div>
  );
}

export default function Example33() {
  return (
    <BrowserRouter>
      <h2>Example 33 - Query Params</h2>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
