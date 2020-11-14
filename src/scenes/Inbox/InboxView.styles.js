import { Link } from "react-router-dom";
import styled from "styled-components";

export const ChatsWithMessagessContainer = styled.div`
  display: flex;
`;

export const ChatsContainer = styled.aside`
  background: #fff;
  padding: 0 0 0 14px;
`;

export const ChatsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: calc(100vh - 109px);
  overflow-y: scroll;
`;

export const ChatListLink = styled(Link)`
  text-decoration: none;
`;

export const MessageListMainContainer = styled.main`
  width: 100%;
  border: 1px solid #e7e9ed;
`;
