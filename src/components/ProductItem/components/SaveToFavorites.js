import React, { useState } from "react";
import FavoriteActiveIcon from "../../../icons/FavoriteActiveIcon";
import FavoriteItem from "../../../icons/FavoriteItem";
import { SaveIconContainer } from "./SaveToFavorites.styles";

const SaveToFavorites = () => {
  const [isLike, setLike] = useState(true);

  const toggleLike = () => {
    setLike((old) => !old);
  };

  return (
    <SaveIconContainer onClick={toggleLike}>
      {isLike ? <FavoriteItem /> : <FavoriteActiveIcon />}
    </SaveIconContainer>
  );
};

export default SaveToFavorites;
