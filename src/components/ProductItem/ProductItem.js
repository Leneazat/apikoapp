import { observer } from "mobx-react";
import React from "react";
import { generatePath } from "react-router";
import { routes } from "../../scenes/routes";
import SaveToFavorites from "./components/SaveToFavorites";
import {
  ProductPhotoContainer,
  ProductPrice,
  ProductTitle,
  ProductTitleContainer,
} from "./ProductItem.styles";

const ProductItem = observer(({ item }) => {
  return (
    <>
      <ProductTitleContainer>
        <ProductPhotoContainer
          src={item.photos}
          alt='Photo not uploaded'></ProductPhotoContainer>
        <SaveToFavorites></SaveToFavorites>
        <ProductTitle to={generatePath(routes.product, { productId: item.id })}>
          {item.title}
        </ProductTitle>
        <ProductPrice>
          ${""}
          {item.price}
        </ProductPrice>
      </ProductTitleContainer>
    </>
  );
});

export default ProductItem;
