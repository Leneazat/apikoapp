import styled from "styled-components";

export const FilterBarContainer = styled.div`
  display: flex;
  width: 840px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.217111);
  border-radius: 4px;
  height: 59px;
  padding: 0 8px;
  align-items: center;
`;

export const FilterBarCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 12px;
  height: 36px;
  justify-content: space-between;
  margin-right: 24px;
`;

export const FilterBarCategoryText = styled.p`
  margin: 0;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.35px;
  color: #505050;
  margin-left: 12px;
  margin-right: 72px;
`;

export const FilterBarPriceContainer = styled.div`
  background: #f9fafb;
  border: 1px solid #dedee0;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 5px;
  padding: 0 12px;
  width: 142px;
  height: 36px;
`;

export const FilterBarPriceText = styled.p`
  margin: 0;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.35px;
  color: #505050;
`;

export const FilterBarSeparator = styled.div`
  border: 1px solid #dedee0;
  width: 12px;
  height: 1px;
  margin: 0 8px;
`;

export const FilterBarMainContainer = styled.div`
  display: flex;
  margin-top: 18px;
  align-items: center;
  justify-content: center;
`;
