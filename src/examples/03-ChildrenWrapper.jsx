import React from "react";

const Card = ({ children }) => {
  return (
    <div style={{ border: "2px solid teal", padding: 20, margin: 10 }}>
      {children}
    </div>
  );
};

export default Card;
