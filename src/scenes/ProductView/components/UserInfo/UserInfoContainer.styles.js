import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserInfoContainerMainBox = styled.div`
  display: flex;
  margin-left: 16px;
  flex-direction: column;
`;

export const UserInfoContainerButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export const UserInfoContinerChatButton = styled.button`
  background: #349a89;
  border-radius: 4px;
  width: 259px;
  height: 47px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 31px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const UserInfoContinerAddToFavoriteButton = styled.button`
  text-transform: uppercase;
  color: #535353;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 31px;
  border: none;
  outline: none;
  background: transparent;
  margin-left: 8px;
  cursor: pointer;
`;

export const UserInfoContainerAvatarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 259px;
  height: 146px;
  background: #ffffff;
  border: 1px solid #dedee0;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
`;

export const UserInfoContainerOwnerName = styled(Link)`
  font-family: Helvetica;
  font-size: 15px;
  line-height: 17px;
  color: #2b2b2b;
  text-decoration: none;
  margin: 8px 0 4px 0;
`;

export const UserInfoContainerLocation = styled.p`
  font-family: Helvetica;
  font-size: 15px;
  line-height: 17px;
  color: rgba(43, 43, 43, 0.499918);
  max-width: fit-content;
  white-space: normal;
  margin: 0;
`;

export const UserInfoContainerAbsoluteBlock = styled.div`
  width: 259px;
  background: #349a89;
  border-radius: 4px 4px 0px 0px;
  height: 50px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const UserInfoContainerAvatar = styled(Avatar)`
  z-index: 3;
`;

export const UserInfoContainerFavoriteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 259px;
  height: 47px;
  text-transform: uppercase;
  background: #ffffff;
  border: 1px solid #349a89;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 31px;
  text-transform: uppercase;
  color: #535353;
`;
