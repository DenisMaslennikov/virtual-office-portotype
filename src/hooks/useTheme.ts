import { useContext } from "react";
import ThemeContext from "../context/Theme/ThemeContext.ts";

export default function useTheme() {
  return useContext(ThemeContext);
}
