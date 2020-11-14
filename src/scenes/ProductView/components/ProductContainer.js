import { observer } from "mobx-react";
import React from "react";
import { RelativeContainer } from "../../../styles";
import {
  ProductContainerPhoto,
  ProductContainerBox,
  ProductContainerPrice,
  ProductContainerTitleBox,
  ProductContainerTitle,
  ProductContainerCreatedTime,
  ProductContainerLocationBox,
  ProductContainerLocation,
  ProductContainerTitleContainer,
  ProductContainerDescription,
  ProductContainerTitleWithDescription,
} from "./ProductContainer.styles";
import { LocationIcon } from "../../../icons/LocationIcon";

const ProductContainer = observer(({ product }) => {
  return (
    <ProductContainerBox>
      <div>
        <RelativeContainer>
          <ProductContainerPhoto src={product.photos} />
          <ProductContainerPrice>${product.price}</ProductContainerPrice>
        </RelativeContainer>
        <ProductContainerTitleWithDescription>
          <ProductContainerTitleContainer>
            <ProductContainerTitleBox>
              <ProductContainerTitle>{product.title}</ProductContainerTitle>
              <ProductContainerCreatedTime>
                {product.createdAt}
              </ProductContainerCreatedTime>
            </ProductContainerTitleBox>
            <ProductContainerLocationBox>
              <LocationIcon></LocationIcon>
              <ProductContainerLocation>
                {product.location}
              </ProductContainerLocation>
            </ProductContainerLocationBox>
          </ProductContainerTitleContainer>
          <ProductContainerDescription>
            {product.description}
          </ProductContainerDescription>
        </ProductContainerTitleWithDescription>
      </div>
    </ProductContainerBox>
  );
});

export default ProductContainer;
