import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../../components";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useUsersCollection } from "../../stores/Users/UsersCollection";
import { ProductListContainer } from "../Home/Home.styles";
import {
  UserViewAvatar,
  UserViewAvatarContainer,
  UserViewUserName,
  UserViewBox,
  UserViewMainContainer,
  UserViewUserLocation,
  UserViewStatsContainer,
  UserViewStatsBoxes,
  UserViewStatsText,
  UserViewStatsPercentCounter,
  UserViewStatsSalesCounter,
  UserViewStatsListingCounter,
  UserViewStatsListingCounterTriangle,
} from "./UserView.stlyes";

const ProductsSection = observer(({ user }) => {
  useEffect(() => {
    if (user.ownProducts.items) {
      user.ownProducts.fetch.run();
    }
  }, []);

  if (user.ownProducts.fetch.isLoading) {
    return <div>Loading...</div>;
  } else if (!user.ownProducts.items) {
    return <div>Not found</div>;
  }

  return (
    <>
      <ProductListContainer>
        {user.ownProducts.items.map((item) => (
          <ProductItem item={item}></ProductItem>
        ))}
      </ProductListContainer>
    </>
  );
});

const UserView = observer(() => {
  const { userId } = useParams();
  const userCollection = useUsersCollection();

  const user = userCollection.get(userId);

  useEffect(() => {
    if (!user) {
      userCollection.getById.run(userId);
    }
  }, []);

  if (userCollection.getById.isLoading) {
    return <div>Loading...</div>;
  } else if (!user) {
    return <div>Not found</div>;
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <>
      <Header></Header>
      <UserViewBox>
        <UserViewMainContainer>
          <UserViewAvatarContainer>
            <UserViewAvatar
              name={user.fullName}
              size='95px'
              round={true}></UserViewAvatar>
            <UserViewUserName>{user.fullName}</UserViewUserName>
            <UserViewUserLocation>{user.location}</UserViewUserLocation>
            <UserViewStatsContainer>
              <UserViewStatsBoxes greenback={true}>
                <UserViewStatsPercentCounter>
                  {randomNumber(70, 100)}%
                </UserViewStatsPercentCounter>
                <UserViewStatsText whitetext={true}>
                  Positive feedback
                </UserViewStatsText>
              </UserViewStatsBoxes>
              <UserViewStatsBoxes greenback={true}>
                <UserViewStatsSalesCounter>
                  {randomNumber(50, 350)}
                </UserViewStatsSalesCounter>
                <UserViewStatsText whitetext={true}>Sales</UserViewStatsText>
              </UserViewStatsBoxes>
              <UserViewStatsBoxes greenback={false}>
                <UserViewStatsListingCounter>12</UserViewStatsListingCounter>
                <UserViewStatsText whitetext={false}>
                  Active listings
                </UserViewStatsText>
                <UserViewStatsListingCounterTriangle></UserViewStatsListingCounterTriangle>
              </UserViewStatsBoxes>
            </UserViewStatsContainer>
          </UserViewAvatarContainer>
          <ProductsSection user={user} />
        </UserViewMainContainer>
      </UserViewBox>
    </>
  );
});

export default UserView;
