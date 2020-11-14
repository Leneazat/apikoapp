import React, { useState } from "react";
import { observer } from "mobx-react";
import { generatePath } from "react-router-dom";
import { routes } from "../../../routes";
import {
  UserInfoContainerButtonsBox,
  UserInfoContainerMainBox,
  UserInfoContinerChatButton,
  UserInfoContinerAddToFavoriteButton,
  UserInfoContainerAvatarBox,
  UserInfoContainerOwnerName,
  UserInfoContainerLocation,
  UserInfoContainerAbsoluteBlock,
  UserInfoContainerAvatar,
  UserInfoContainerFavoriteBox,
} from "./UserInfoContainer.styles";
import { FavoriteIcon } from "../../../../icons/FavoriteIcon";
import { UserViewAvatarContainer } from "../../../UserView/UserView.stlyes";
import ModalChat from "./ModalChat";

export const UserInfoContainer = observer(({ product }) => {
  const [show, setShow] = useState(false);

  function handleChatWithSeller() {
    setShow(true);
  }

  return (
    <>
      <UserInfoContainerMainBox>
        <UserInfoContainerAvatarBox>
          <UserInfoContainerAbsoluteBlock></UserInfoContainerAbsoluteBlock>
          <UserViewAvatarContainer>
            <UserInfoContainerAvatar
              name={product.owner.fullName}
              round={true}
              size='72px'></UserInfoContainerAvatar>
          </UserViewAvatarContainer>

          <UserInfoContainerOwnerName
            to={generatePath(routes.user, { userId: product.owner.id })}>
            {product.owner.fullName}
          </UserInfoContainerOwnerName>
          <UserInfoContainerLocation>
            {product.owner.location}
          </UserInfoContainerLocation>
        </UserInfoContainerAvatarBox>
        <UserInfoContainerButtonsBox>
          <UserInfoContinerChatButton
            type='button'
            onClick={handleChatWithSeller}>
            Chat with seller
          </UserInfoContinerChatButton>
          <UserInfoContainerFavoriteBox>
            <FavoriteIcon></FavoriteIcon>
            <UserInfoContinerAddToFavoriteButton>
              Add to favorite
            </UserInfoContinerAddToFavoriteButton>
          </UserInfoContainerFavoriteBox>
        </UserInfoContainerButtonsBox>
      </UserInfoContainerMainBox>
      <ModalChat product={product} show={show} setShow={setShow}>
        Hi
      </ModalChat>
    </>
  );
});
