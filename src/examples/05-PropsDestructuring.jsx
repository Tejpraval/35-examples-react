import React from "react";

const Profile = ({ name = "Guest", age = 18 }) => {
  return (
    <div style={{ margin: 10 }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default function Example05() {
  return (
    <>
      <h2>Example 05 - Props Destructuring</h2>
      <Profile name="Alex" age={25} />
      <Profile />
    </>
  );
}
