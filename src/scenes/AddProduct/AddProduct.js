import { observer } from "mobx-react";
import React from "react";
import { generatePath, useHistory } from "react-router";
import { Header } from "../../components";
import { useStore } from "../../stores/createStore";
import { routes } from "../routes";
import AddProductForm from "./components/AddProductForm";

const AddProduct = () => {
  const store = useStore();
  const history = useHistory();

  async function onSubmit({ title, location, photos, description, price }) {
    if (store.auth.isLoggedIn === true) {
      const res = await store.latestProducts.addProduct.run(
        {
          title,
          location,
          description,
          photos,
          price,
        },
        (id) => history.push(generatePath(routes.product, { productId: id }))
      );
    } else {
      history.push(routes.login);
    }
  }

  return (
    <>
      <Header withSearchBar={false}></Header>
      <AddProductForm onSubmit={onSubmit}></AddProductForm>
    </>
  );
};

export default observer(AddProduct);
