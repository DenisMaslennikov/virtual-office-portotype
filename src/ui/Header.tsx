import styled from "styled-components";
import { BACKGROUND_COLOR, BORDER_COLOR } from "../utils/constants.ts";
import ButtonIcon from "./ButtonIcon.tsx";
import useTheme from "../hooks/useTheme.ts";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const StyledHeader = styled.header`
  background-color: var(${BACKGROUND_COLOR});
  grid-column: 1 / -1;

  padding: 0 1rem;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(${BORDER_COLOR});
`;

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <StyledHeader>
      Header
      <ButtonIcon onClick={toggleTheme} $height="1.5rem" $width="1.5rem">
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIcon>
    </StyledHeader>
  );
}

export default Header;
