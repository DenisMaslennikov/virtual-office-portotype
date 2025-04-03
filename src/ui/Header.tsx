import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  grid-column: 1 / -1;
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
