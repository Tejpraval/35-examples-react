import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggle = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: 20
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { toggle } = useContext(ThemeContext);
  return <button onClick={toggle}>Toggle Theme</button>;
}

export default function Example38() {
  return (
    <ThemeProvider>
      <h2>Example 38 - Theme Context</h2>
      <ThemeButton />
    </ThemeProvider>
  );
}
