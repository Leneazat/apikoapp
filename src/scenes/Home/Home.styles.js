import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content); 
  grid-row-gap: 12px;
  grid-column-gap: 6px;
  margin: 16px auto;
  width: fit-content;
}
`;
