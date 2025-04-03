import styled from "styled-components";
import { BACKGROUND_COLOR, BORDER_COLOR } from "../utils/constants.ts";

const StyledHeader = styled.header`
  background-color: var(${BACKGROUND_COLOR});
  grid-column: 1 / -1;

  padding: 1rem 1rem;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(${BORDER_COLOR});
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
