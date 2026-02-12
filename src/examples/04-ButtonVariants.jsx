import React from "react";

const Button = ({ variant, children }) => {
  const styles = {
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    background:
      variant === "danger" ? "red" : variant === "success" ? "green" : "blue",
    color: "#fff",
    marginRight: 10,
  };

  return <button style={styles}>{children}</button>;
};

export default Button;