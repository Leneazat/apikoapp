const { default: styled } = require("styled-components");

export const RelativeContainer = styled.div`
  position: relative;
`;

export const RowSpaceBetweenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: none;
  padding: 0;
  margin: 0;
  background: none;
  &:focus {
    border: none;
    outline: none;
  }
  outline: none;
`;
