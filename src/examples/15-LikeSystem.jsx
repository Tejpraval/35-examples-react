import React, { useState } from "react";

export default function Example15() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Example 15 - Like System</h2>
      <button onClick={() => setLikes(likes + 1)}>👍 Like</button>
      <p>Total Likes: {likes}</p>
    </div>
  );
}
