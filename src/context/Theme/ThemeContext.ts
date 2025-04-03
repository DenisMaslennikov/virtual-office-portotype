import { createContext } from "react";

const defaultValue = {
  isDarkMode: window.matchMedia("(prefers-color-scheme: dark-mode)").matches,
  toggleTheme: () =>
    console.error("toggleTheme used outside ThemeContextProvider"),
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
