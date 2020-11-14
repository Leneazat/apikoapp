import Avatar from "react-avatar";
import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const MessageListOwnerBlock = styled.div`
  background: #ffffff;
  height: 72px;
  display: flex;
  border-bottom: 1px solid #e7e9ed;
  align-items: center;
`;

export const MessageListOwnerAvatar = styled(Avatar)`
  margin-left: 8px;
`;

export const MessageListOwnerName = styled.p`
  margin: 0 16px;
  ont-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #131314;
`;

export const MessageListProductContainer = styled.div`
  background: #f8f8f8;
  border-radius: 5px;
  display: flex;
  padding: 12px;
  margin-left: 40px;
  align-items: center;
`;

export const MessageListProductImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const MessageListProductInfoBlock = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const MessageListProductTitle = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #000000;
`;

export const MessageListProductPrice = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #000000;
`;

export const MessageListIconContainer = styled.div`
  position: absolute;
  right: 12px;
`;

export const MessageListTextAreaContainer = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background: #fff;
  border: 1px solid #e7e9ed;
`;

export const MessageListTextArea = styled.textarea`
  resize: none;
  width: 90%;
  height: 100%;
  outline: none;
  border: none;
`;

export const MessageListTextAreaIcons = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const MessageListTextAreaIconsWrapp = styled.div`
  margin-right: 28px;
`;

export const MessageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
`;
