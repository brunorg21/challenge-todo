import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.gray700};
  height: 12.5rem;
`;
