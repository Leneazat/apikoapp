import styled from "styled-components";
import { Input } from "../../../../styles";

export const SearchBarContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  margin-top: 40px;
  align-self: center;
  width: 80%;
  justify-content: space-between;
`;

export const SearchBarInputContainer = styled.div(
  ({ flex }) => `
  padding: 16px;
  background: #ffffff;
  border-radius: 4px;
  margin: 0 8px;
  display: flex;
  flex: ${flex};
`
);

export const SearchBarButton = styled.button`
  background: #3e3961;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-transform: uppercase;
  height: 50px;
  width: 176px;
  margin: 0 8px;
  color: #fff;
`;

export const StyledInput = styled(Input)`
  display: flex;
  flex: 1;
  margin-left: 16px;
  ::placeholder {
    color: rgba(123, 123, 123, 0.776523);
  }
`;
