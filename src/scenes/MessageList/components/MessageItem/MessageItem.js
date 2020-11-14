import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../../../stores/createStore";
import { MessageContainer } from "./MessageItem.styles";

const MessageItem = observer(({ item }) => {
  const store = useStore();
  const { text, ownerId } = item;

  console.log(555, store);

  const currentUserId = store.viewer.user.id;
  console.log(currentUserId);

  const isCurrentUserMessage = currentUserId === ownerId;

  return (
    <MessageContainer isCurrentUserMessage={isCurrentUserMessage}>
      {text}
    </MessageContainer>
  );
});

export default MessageItem;
