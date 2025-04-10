import styled from "styled-components";

import { BACKGROUND_COLOR, BORDER_COLOR } from "../utils/constants.ts";
import MenuLinkList from "./MenuLinkList.tsx";

const StyledSidebar = styled.aside`
  background-color: var(${BACKGROUND_COLOR});
  border-right: 1px solid var(${BORDER_COLOR});
  padding: 1rem 1rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <MenuLinkList>
        <MenuLinkList.Item>
          Проекты
          <MenuLinkList>
            <MenuLinkList.Item>Проект 1</MenuLinkList.Item>
            <MenuLinkList.Item>Проект 2</MenuLinkList.Item>
          </MenuLinkList>
        </MenuLinkList.Item>
      </MenuLinkList>
    </StyledSidebar>
  );
}

export default Sidebar;
