import { observer } from "mobx-react";
import React from "react";
import { Header } from "../../components";
import { useStore } from "../../stores/createStore";
import AddProductForm from "./components/AddProductForm";

const AddProduct = () => {
  const store = useStore();

  async function onSubmit({ title, location, description, price }) {
    const photos = store.uploads.getImages();
    await store.latestProducts.addProduct.run({
      title,
      location,
      description,
      photos,
      price,
    });
  }

  return (
    <>
      <Header withSearchBar={false}></Header>
      <AddProductForm onSubmit={onSubmit}></AddProductForm>
    </>
  );
};

export default observer(AddProduct);
