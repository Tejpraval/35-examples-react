import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, margin: 10 }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};



export default UserCard;

