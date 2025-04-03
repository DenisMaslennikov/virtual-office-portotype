import styled from "styled-components";

import { BACKGROUND_COLOR, BORDER_COLOR } from "../utils/constants.ts";

const StyledSidebar = styled.aside`
  background-color: var(${BACKGROUND_COLOR});
  border-right: 1px solid var(${BORDER_COLOR});
  padding: 1rem 1rem;
`;

function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
