import styled from "styled-components";
import { RelativeContainer } from "../../styles";

export const HeaderContainer = styled.div(
  ({ withSearchBar, isLight }) => `
  display: flex;
  padding: 18px 159px 0 97px;
  flex-direction: column;
  height: ${withSearchBar ? "166px" : "77px"};
  background: ${
    isLight ? "#F2F2F2" : "linear-gradient(180deg, #090810 0%, #171236 100%)"
  };
  `
);

export const AlignSelf = styled.div(
  ({ isAuthorized }) => `
  align-self: ${isAuthorized ? "flex-start" : "none"}
  `
);

export const AvatarContainer = styled(RelativeContainer)`
  margin: 0 36px 0 36px;
`;

export const LoginButton = styled.button(
  ({ isLight }) => `
  margin-left: 33px;
  margin-right: 39px;
  font-family: Helvetica;
  font-size: 12px;
  line-height: 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${isLight ? "#2b2b2b" : "#FFFFFF"};
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`
);
