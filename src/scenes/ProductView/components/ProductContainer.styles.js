import styled from "styled-components";

export const ProductContainerPhoto = styled.img`
  border-radius: 4px 4px 0px 0px;
  width: 576px;
  height: 274px;
`;

export const ProductContainerBox = styled.div`
  background: #ffffff;
  border: 1.08px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px rgba(121, 121, 121, 0.0527344);
  border-radius: 4px;
  padding: 4px;
`;

export const ProductContainerPrice = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ffffff;
  padding: 8px 18px 0;
  border-radius: 10.8px 0px 0px 0px;
  font-family: Helvetica;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  color: #101010;
`;

export const ProductContainerTitleContainer = styled.div`
  border-bottom: 1.08px solid rgba(151, 151, 151, 0.166439);
  padding-bottom: 4px;
`;

export const ProductContainerTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductContainerTitle = styled.h3`
  font-family: Helvetica;
  font-size: 18.36px;
  line-height: 21px;
  color: #373738;
  margin: 0 8px 0 0;
`;

export const ProductContainerCreatedTime = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  color: #9d9d9d;
  margin: 0;
`;

export const ProductContainerLocationBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductContainerLocation = styled.p`
  margin: 0 0 0 10px;
  font-family: Helvetica;
  font-size: 14.04px;
  line-height: 33px;
  color: rgba(123, 123, 123, 0.776523);
`;

export const ProductContainerDescription = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  line-height: 24px;
  color: #2b2b2b;
  margin: 12px 0 0 0;
  max-width: fit-content;
  white-space: normal;
`;

export const ProductContainerTitleWithDescription = styled.div`
  padding: 12px 0 12px 12px;
`;
