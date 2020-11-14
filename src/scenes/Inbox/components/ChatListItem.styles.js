import styled from "styled-components";

export const ChatListItemContainer = styled.div`
  display: flex;
  padding: 24px 16px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 10, 62, 0.05);
  margin-bottom: 12px;
  justify-content: space-between;
`;

export const ChatListItemOwnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const ChatListItemOwnerName = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #000000;
`;

export const ChatListItemOwnerLastMessage = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 152.1%;
  color: rgba(43, 43, 43, 0.499918);
  margin: 0;
`;

export const ChatListItemSeparator = styled.div`
  border: 1px solid #e7e9ed;
  transform: rotate(-90deg);
  width: 36px;
  height: 2px;
`;

export const ChatListItemProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatListItemProductImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const ChatListItemProductInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const ChatListItemProductTitle = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #000000;
  margin-bottom: 4px;
`;

export const ChatListItemProductPrice = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #000000;
  margin: 0;
`;

export const ChatListItemMessageTime = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 152.1%;
  color: rgba(43, 43, 43, 0.499918);
`;
