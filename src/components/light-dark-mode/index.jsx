import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("light");

  function handleChangeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
