import { createContext } from "react";
import type { MenuContext } from "../types/MenuContext.ts";

const defaultValue: MenuContext = {
  toggleCollapse: () =>
    console.error("toggleCollapse used outside MenuContextProvider"),
  isCollapsed: () =>
    console.error("isCollapsed used outside MenuContextProvider"),
};

const MenuContext = createContext(defaultValue);

export default MenuContext;
