import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../stores/createStore";
import { MessageListOwnerBlockPic } from "../../icons/MessageListOwnerBlockPic";
import {
  ChatContainer,
  MessageListOwnerAvatar,
  MessageListOwnerBlock,
  MessageListIconContainer,
  MessageListOwnerName,
  MessageListProductContainer,
  MessageListProductImage,
  MessageListProductInfoBlock,
  MessageListProductPrice,
  MessageListProductTitle,
  MessageListTextAreaContainer,
  MessageListTextArea,
  MessageListTextAreaIcons,
  MessageListTextAreaIconsWrapp,
  MessageListContainer,
} from "./MessageList.styles";
import MessageListIcon from "../../icons/MessageListIcon";
import MessageListEmoji from "../../icons/MessageListEmoji";
import MessageListPin from "../../icons/MessageListPin";
import MessageItem from "./components/MessageItem/MessageItem";

export const MessageList = observer(() => {
  const { chatId } = useParams();
  const [message, setMessage] = useState("");
  const chat = useStore((store) => store.chats.getById(+chatId));

  useEffect(() => {
    if (!!chat) {
      chat.messages.fetch.run();
    }
  }, [chat]);

  if (!chat) {
    return <div>Loading...</div>;
  }

  function handleChange(evt) {
    setMessage(evt.target.value);
  }

  function handleSend(event) {
    if (event.key === "Enter") {
      chat.sendMessage.run(message);
      setMessage("");
    }
  }

  return (
    <>
      <ChatContainer>
        <MessageListOwnerBlock>
          <MessageListOwnerAvatar
            name={chat.user.fullName}
            size='45px'
            round={true}></MessageListOwnerAvatar>
          <MessageListOwnerName>{chat.user.fullName}</MessageListOwnerName>
          <MessageListProductContainer>
            <MessageListProductImage src={chat.product.photos} />
            <MessageListProductInfoBlock>
              <MessageListProductTitle>
                {chat.product.title}
              </MessageListProductTitle>
              <MessageListProductPrice>
                ${chat.product.price}
              </MessageListProductPrice>
            </MessageListProductInfoBlock>
            <MessageListOwnerBlockPic />
          </MessageListProductContainer>
          <MessageListIconContainer>
            <MessageListIcon />
          </MessageListIconContainer>
        </MessageListOwnerBlock>
        <MessageListContainer>
          {chat.messages.asList.map((item) => (
            <MessageItem item={item}></MessageItem>
          ))}
        </MessageListContainer>
        <MessageListTextAreaContainer>
          <MessageListTextArea
            onChange={handleChange}
            value={message}
            placeholder='Type your message here...'
            onKeyDown={handleSend}></MessageListTextArea>
          <MessageListTextAreaIcons>
            <MessageListTextAreaIconsWrapp>
              <MessageListEmoji />
            </MessageListTextAreaIconsWrapp>
            <MessageListPin />
          </MessageListTextAreaIcons>
          <button type='button' onClick={handleSend}>
            Send
          </button>
        </MessageListTextAreaContainer>
      </ChatContainer>
    </>
  );
});

export default MessageList;
