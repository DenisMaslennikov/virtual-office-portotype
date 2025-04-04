import styled from "styled-components";

const ButtonIcon = styled.button<{ $height?: string; $width?: string }>`
  background: none;
  border: none;
  padding: 0.5rem;

  & svg {
    width: ${({ $width = "2.2rem" }) => $width};
    height: ${({ $height = "2.2rem" }) => $height};
    color: var(--color-grey-500);
  }

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

export default ButtonIcon;
