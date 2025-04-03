import styled from "styled-components";

const ButtonIcon = styled.button<{ $height?: string; $width?: string }>`
  background: none;
  border: none;

  & svg {
    width: ${({ $width = "2.2rem" }) => $width};
    height: ${({ $height = "2.2rem" }) => $height};
    color: var(--color-grey-500);
  }
`;

export default ButtonIcon;
