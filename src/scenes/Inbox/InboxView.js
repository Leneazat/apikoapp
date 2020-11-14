import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { generatePath, Link, Route } from "react-router-dom";
import { Header } from "../../components";
import { useStore } from "../../stores/createStore";
import { routes } from "../routes";
import { MessageList } from "../MessageList/MessageList";
import {
  ChatListLink,
  ChatsContainer,
  ChatsList,
  ChatsWithMessagessContainer,
  MessageListMainContainer,
} from "./InboxView.styles";
import ChatListItem from "./components/ChatListItem";

const InboxView = observer(() => {
  const chats = useStore((store) => store.chats);

  useEffect(() => {
    chats.fetch.run();
  }, []);

  return (
    <>
      <Header withSearchBar={false}></Header>
      <ChatsWithMessagessContainer>
        <ChatsContainer>
          <ChatsList>
            {chats.items.map((item) => (
              <ChatListLink to={generatePath(routes.chat, { chatId: item.id })}>
                <ChatListItem item={item}></ChatListItem>
              </ChatListLink>
            ))}
          </ChatsList>
        </ChatsContainer>

        <MessageListMainContainer>
          <Route path={routes.chat} component={MessageList} />
        </MessageListMainContainer>
      </ChatsWithMessagessContainer>
    </>
  );
});

export default InboxView;
