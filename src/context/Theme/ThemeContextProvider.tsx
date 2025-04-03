import { PropsWithChildren, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext.ts";

function ThemeContextProvider({ children }: PropsWithChildren) {
  const [isDarkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark-mode)").matches,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [isDarkMode]);

  function toggleTheme() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
