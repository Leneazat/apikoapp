import styled from "styled-components";
export const StyledUserModal = styled.div`
  width: 204px;
  height: auto;
  background: white;
  z-index: 999;
  position: absolute;
  right: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const UserModalWrapper = styled.div`
  display: flex;
  justify-content: space-beetwen;
  padding-bottom: 18px;
  padding-left: 16px;
  padding-top: 9px;
`;

export const UserModalPersonInfo = styled.div`
  display: flex;
  justify-content: space-beetwen;
  flex-direction: column;
  margin-left: 12px;
`;
