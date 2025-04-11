type MenuContext = {
  toggleCollapse: (id: string) => void;
  isCollapsed: (id: string) => boolean | void;
};

export type { MenuContext };
