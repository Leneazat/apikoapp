import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { Header } from "../../components";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useStore } from "../../stores/createStore";
import FilterBar from "./components/FilterBar";
import { ProductListContainer } from "./Home.styles";

export const Home = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  });

  return (
    <>
      <Header></Header>
      <FilterBar />
      <ProductListContainer>
        {store.latestProducts.items.map((item) => (
          <ProductItem item={item} key={item}></ProductItem>
        ))}
      </ProductListContainer>
    </>
  );
});

export default Home;
