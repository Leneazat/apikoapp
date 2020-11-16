import { observer } from "mobx-react";
import React from "react";
import {
  ChatListItemContainer,
  ChatListItemMessageTime,
  ChatListItemOwnerContainer,
  ChatListItemOwnerLastMessage,
  ChatListItemOwnerName,
  ChatListItemProductContainer,
  ChatListItemProductImage,
  ChatListItemProductInfoBlock,
  ChatListItemProductPrice,
  ChatListItemProductTitle,
  ChatListItemSeparator,
} from "./ChatListItem.styles";

const ChatListItem = observer(({ item }) => {
  return (
    <>
      <ChatListItemContainer>
        <ChatListItemOwnerContainer>
          <ChatListItemOwnerName>{item.user.fullName}</ChatListItemOwnerName>
          <ChatListItemOwnerLastMessage>
            {item.message.text}
          </ChatListItemOwnerLastMessage>
        </ChatListItemOwnerContainer>
        <ChatListItemSeparator />
        <ChatListItemProductContainer>
          <ChatListItemProductImage
            src={item.product.photos}></ChatListItemProductImage>
          <ChatListItemProductInfoBlock>
            <ChatListItemProductTitle>
              {item.product.title}
            </ChatListItemProductTitle>
            <ChatListItemProductPrice>
              ${item.product.price}
            </ChatListItemProductPrice>
          </ChatListItemProductInfoBlock>
        </ChatListItemProductContainer>
        <ChatListItemSeparator />
        <ChatListItemMessageTime>{item.createdAt}</ChatListItemMessageTime>
      </ChatListItemContainer>
    </>
  );
});

export default ChatListItem;
