import styled from "styled-components";

export const ModalChatContainer = styled.div`
  width: 820px;
  height: 520px;
  background: #fff;
  position: relative;
  z-index: 10;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  padding: 14px 78px 34px 78px;
  display: flex;
  flex-direction: column;
`;

export const ModalChatCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  border: 0;
  -webkit-appearance: none;
  background: none;
  color: #349a89;
  cursor: pointer;
  outline: none;
`;

export const ModalChatOverlay = styled.div`
  z-index: 98;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.37);
`;

export const ModalChatHeader = styled.h3`
  margin: 0;
  font-family: Helvetica;
  font-size: 22px;
  line-height: 25px;
  color: #282828;
  align-self: center;
`;

export const ModalChatSubjectName = styled.p`
  font-family: Helvetica;
  font-size: 24px;
  line-height: 28px;
  color: #373738;
  margin: 28px 0 16px 0;
`;

export const ModalChatUserBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const ModalChatUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const ModalChatUserInfoName = styled.p`
  margin: 0;
  font-family: Helvetica;
  font-size: 24px;
  line-height: 28px;
  color: #2b2b2b;
`;

export const ModalChatUserInfoLocation = styled.p`
  font-family: Helvetica;
  font-size: 15px;
  line-height: 17px;
  margin: 0;
  color: rgba(43, 43, 43, 0.499918);
`;

export const ModalChatTextArea = styled.textarea`
  background: #f9fafb;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 5px;
  resize: none;
  height: 235px;
  padding: 8px;
`;

export const ModalChatTextAreaTitle = styled.label`
  font-family: Helvetica;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #303030;
  margin-bottom: 4px;
`;

export const ModalChatSubmitButton = styled.button`
  background: #349a89;
  border-radius: 5px;
  outline: none;
  text-transform: uppercase;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #ffffff;
  height: 58px;
  width: 377px;
  border: none;
  cursor: pointer;
  align-self: center;
  margin-top: 24px;
`;
