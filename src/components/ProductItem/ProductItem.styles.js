import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProductTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  background-color: white;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(121, 121, 121, 0.0527344);
  border-radius: 4px;
  position: relative;
`;

export const ProductPhotoContainer = styled.img`
  border-radius: 4px 4px 0px 0px;
  width: 200px;
  height: 148px;
`;

export const ProductTitle = styled(NavLink)`
  color: #373738;
  font-family: Helvetica;
  font-size: 15px;
  line-height: 17px;
`;

export const ProductPrice = styled.p`
  font-family: Helvetica;
  font-size: 18px;
  line-height: 21px;
  color: #101010;
`;
