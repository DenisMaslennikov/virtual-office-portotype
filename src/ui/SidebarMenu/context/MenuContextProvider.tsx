import { PropsWithChildren } from "react";
import MenuContext from "./MenuContext.ts";
import useLocalStorageState from "../../../hooks/useLocalStorageState.ts";
import type { MenuCollapseState } from "../types/MenuColapseState.ts";

function MenuContextProvider({ children }: PropsWithChildren) {
  const [collapsed, setCollapsed] = useLocalStorageState<MenuCollapseState>(
    {},
    "menuCollapsed",
  );

  function toggleCollapse(id: string) {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function isCollapsed(id: string) {
    return Boolean(collapsed[id]);
  }

  return (
    <MenuContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
