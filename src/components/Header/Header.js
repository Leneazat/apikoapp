import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { AuthHeartIcon } from "../../icons/AuthHeartIcon";
import { MarketplaceIcon } from "../../icons/MarketplaceIcon";
import { MarketplaceHomeIcon } from "../../icons/MarketplaceHomeIcon";
import { HomeHeartIcon } from "../../icons/HomeHeartIcon";
import { observer } from "mobx-react";
import { routes } from "../../scenes/routes";
import { useStore } from "../../stores/createStore";
import s from "./Header.module.scss";
import {
  HeaderContainer,
  AlignSelf,
  AvatarContainer,
  LoginButton,
} from "./Header.styles";
import Avatar from "react-avatar";
import { RowSpaceBetweenContainer } from "../../styles";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { UserModal } from "./components/UserModal/UserModal";
import InboxNavigator from "./components/InboxNavigator/InboxNavigator";

const UserInfo = observer(() => {
  const store = useStore();

  const [isOpened, setOpened] = useState(false);
  const toggle = () => {
    setOpened((old) => !old);
  };

  return (
    <AvatarContainer>
      <Avatar
        onClick={toggle}
        name={store.viewer.user.fullName}
        size='40px'
        round={true}
      />
      {isOpened && <UserModal />}
    </AvatarContainer>
  );
});

function Header({ isLight = false, withSearchBar = true }) {
  const history = useHistory();
  const store = useStore();

  function navigateToLogin() {
    history.push(routes.login);
  }

  function navigateToAddProduct() {
    history.push(routes.addProduct);
  }

  return (
    <HeaderContainer isLight={isLight} withSearchBar={withSearchBar}>
      <RowSpaceBetweenContainer>
        <AlignSelf isAuthorized={store.auth.isLoggedIn}>
          <NavLink to={routes.home}>
            {isLight ? <MarketplaceIcon /> : <MarketplaceHomeIcon />}
          </NavLink>
        </AlignSelf>

        <AlignSelf isAuthorized={store.auth.isLoggedIn}>
          <div className={s.headerAuthBlock}>
            {store.auth.isLoggedIn ? <InboxNavigator /> : null}
            <button
              onClick={navigateToAddProduct}
              className={s.sellButton}
              type='button'>
              Sell
            </button>
            {store.auth.isLoggedIn ? (
              <UserInfo></UserInfo>
            ) : (
              <LoginButton
                isLight={isLight}
                className={s.loginButton}
                type='button'
                onClick={navigateToLogin}>
                Login
              </LoginButton>
            )}
            {isLight ? <AuthHeartIcon /> : <HomeHeartIcon />}
          </div>
        </AlignSelf>
      </RowSpaceBetweenContainer>
      {withSearchBar && <SearchBar />}
    </HeaderContainer>
  );
}

export default observer(Header);
