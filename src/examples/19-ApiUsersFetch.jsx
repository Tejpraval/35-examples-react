import React, { useState, useEffect } from "react";

export default function Example19() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Example 19 - API Users Fetch</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}
