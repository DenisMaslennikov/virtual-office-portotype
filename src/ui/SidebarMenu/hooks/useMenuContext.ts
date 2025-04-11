import { useContext } from "react";
import MenuContext from "../context/MenuContext.ts";

export default function useMenuContext() {
  return useContext(MenuContext);
}
