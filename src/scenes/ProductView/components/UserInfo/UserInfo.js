import { useUsersCollection } from "../../../../stores/Users/UsersCollection";
import React, { useEffect } from "react";
import { UserInfoContainer } from "./UserInfoContainer";
import { observer } from "mobx-react";

export const UserInfo = observer(({ product }) => {
  const collection = useUsersCollection();

  useEffect(() => {
    if (!product.owner) {
      product.fetchOwner();
    }
  }, []);

  if (collection.getById.isLoading) {
    return <div>Loading...</div>;
  } else if (!product.owner) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <UserInfoContainer product={product}></UserInfoContainer>
    </div>
  );
});
