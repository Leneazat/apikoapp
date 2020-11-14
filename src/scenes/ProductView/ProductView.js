import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../../components";
import { useProductsCollection } from "../../stores/Products/ProductsCollection";
import { ProductViewContainer } from "./ProductView.styles";
import ProductContainer from "./components/ProductContainer";
import { UserInfo } from "./components/UserInfo/UserInfo";

const ProductView = observer(() => {
  const { productId } = useParams();
  const collection = useProductsCollection();

  const product = collection.get(productId);

  useEffect(() => {
    if (!product) {
      collection.getProduct.run(productId);
    } else if (!product.owner) {
      product.fetchOwner();
    }
  }, []);

  if (collection.getProduct.isLoading) {
    return <div>Loading...</div>;
  } else if (!product) {
    return <div>Not found</div>;
  }

  return (
    <>
      <Header></Header>
      <ProductViewContainer>
        <ProductContainer product={product}></ProductContainer>
        <UserInfo product={product} />
      </ProductViewContainer>
    </>
  );
});

export default ProductView;
