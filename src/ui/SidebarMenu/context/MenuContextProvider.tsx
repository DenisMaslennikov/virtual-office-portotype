import { PropsWithChildren, useCallback, useMemo } from "react";

import MenuContext from "./MenuContext.ts";
import useLocalStorageState from "../../../hooks/useLocalStorageState.ts";

import type { MenuContext as MenuContextType } from "../types/MenuContext.ts";
import type { MenuCollapseState } from "../types/MenuColapseState.ts";

function MenuContextProvider({ children }: PropsWithChildren) {
  const [collapsed, setCollapsed] = useLocalStorageState<MenuCollapseState>(
    {},
    "menuCollapsed",
  );

  const toggleCollapse = useCallback(
    (id: string) => setCollapsed((prev) => ({ ...prev, [id]: !prev[id] })),
    [setCollapsed],
  );

  const isCollapsed = useCallback(
    (id: string) => Boolean(collapsed[id]),
    [collapsed],
  );

  const contextValue = useMemo<MenuContextType>(() => {
    return { toggleCollapse, isCollapsed };
  }, [toggleCollapse, isCollapsed]);

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
}

export default MenuContextProvider;
