import { PropsWithChildren, useEffect } from "react";
import ThemeContext from "./ThemeContext.ts";
import useLocalStorageState from "../../hooks/useLocalStorageState.ts";

function ThemeContextProvider({ children }: PropsWithChildren) {
  const [isDarkMode, setDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark-mode)").matches ?? false,
    "isDarkMode",
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
