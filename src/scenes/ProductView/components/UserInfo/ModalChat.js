import React, { useState } from "react";
import {
  ModalChatCloseButton,
  ModalChatContainer,
  ModalChatHeader,
  ModalChatOverlay,
  ModalChatSubjectName,
  ModalChatSubmitButton,
  ModalChatTextArea,
  ModalChatTextAreaTitle,
  ModalChatUserBlock,
  ModalChatUserInfo,
  ModalChatUserInfoLocation,
  ModalChatUserInfoName,
} from "./ModalChat.styles";
import { CloseModalIcon } from "../../../../icons/CloseModalIcon";
import { generatePath, useHistory } from "react-router";
import { routes } from "../../../routes";
import Avatar from "react-avatar";

const ModalChat = ({ children, show, setShow, product }) => {
  const [messageText, setMessageText] = useState("");
  const history = useHistory();

  function closeChatModal() {
    setShow(false);
  }

  async function handleCreateChat() {
    try {
      const chatId = await product.createChat.run(messageText);
      setShow(false);
      history.push(generatePath(routes.inbox, { chatId }));
    } catch (err) {
      console.log(err);
      alert("Such a chat already exists");
    }
  }

  return (
    show && (
      <ModalChatOverlay>
        <ModalChatContainer>
          <ModalChatHeader>Contact seller</ModalChatHeader>
          <ModalChatSubjectName>
            Subject:{""}
            {product.title}
          </ModalChatSubjectName>
          <ModalChatUserBlock>
            <Avatar
              round={true}
              size='72px'
              name={product.owner.fullName}></Avatar>
            <ModalChatUserInfo>
              <ModalChatUserInfoName>
                {product.owner.fullName}
              </ModalChatUserInfoName>
              <ModalChatUserInfoLocation>
                {product.owner.location}
              </ModalChatUserInfoLocation>
            </ModalChatUserInfo>
          </ModalChatUserBlock>
          <ModalChatCloseButton type='button' onClick={closeChatModal}>
            <CloseModalIcon></CloseModalIcon>
          </ModalChatCloseButton>
          <ModalChatTextAreaTitle>Message</ModalChatTextAreaTitle>
          <ModalChatTextArea
            type='text'
            value={messageText}
            onChange={(evt) => setMessageText(evt.target.value)}
            placeholder='For example: Iron man suit'
          />
          <ModalChatSubmitButton type='button' onClick={handleCreateChat}>
            Submit
          </ModalChatSubmitButton>
        </ModalChatContainer>
      </ModalChatOverlay>
    )
  );
};

export default ModalChat;
