import React from "react";
import {
  StyledUserModal,
  UserModalPersonInfo,
  UserModalWrapper,
} from "./UserModal.styles";
import Avatar from "react-avatar";
import { generatePath, Link } from "react-router-dom";
import s from "./UserModal.module.scss";
import { routes } from "../../../../scenes/routes";
import { useStore } from "../../../../stores/createStore";

export const UserModal = () => {
  const store = useStore();

  return (
    <StyledUserModal>
      <UserModalWrapper>
        <Avatar
          name={store.viewer.user.fullName}
          size='48px'
          round={true}></Avatar>
        <UserModalPersonInfo>
          <div className={s.userName}>{store.viewer.user.fullName}</div>
          <div className={s.userEmail}>{store.viewer.user.email}</div>
          <Link
            to={generatePath(routes.user, { userId: store.viewer.user.id })}
            className={s.userProfile}>
            Profile
          </Link>
        </UserModalPersonInfo>
      </UserModalWrapper>
      <Link to={routes.editProfile} className={s.userEditProfile}>
        Edit Profile
      </Link>
      <button
        className={s.userLogoutButton}
        type='button'
        onClick={store.auth.logout}>
        Logout
      </button>
    </StyledUserModal>
  );
};
