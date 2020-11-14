import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../../../stores/createStore";
import { MessageContainer } from "./MessageItem.styles";

const MessageItem = observer(({ item }) => {
  const store = useStore();
  const { text, ownerId } = item;

  const currentUserId = store.viewer.user.id;

  const isCurrentUserMessage = currentUserId === ownerId;

  return (
    <MessageContainer isCurrentUserMessage={isCurrentUserMessage}>
      {text}
    </MessageContainer>
  );
});

export default MessageItem;
