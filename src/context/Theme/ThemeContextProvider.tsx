import { PropsWithChildren, useCallback, useEffect, useMemo } from "react";
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

  const toggleTheme = useCallback(() => {
    setDarkMode((prevState) => !prevState);
  }, [setDarkMode]);

  const contextValue = useMemo(() => {
    return { isDarkMode, toggleTheme };
  }, [toggleTheme, isDarkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
