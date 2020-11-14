import { types } from "mobx-state-tree";
import Api from "../../api";
import { LatestProductCollection } from "../schemas";
import { asyncModel } from "../utils";
import { ProductModel } from "./ProductModel";

export const LatestProductsStore = types
  .model("LatestProductsStore", {
    items: types.array(types.reference(ProductModel)),
    fetchLatest: asyncModel(fetchLatest),
    addProduct: asyncModel(addProduct),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchLatest() {
  return async function fetchLatestFlow(flow, store, Root) {
    const res = await Api.Products.fetchLatest();

    const result = flow.merge(res.data, LatestProductCollection);

    store.setItems(result);
  };
}

function addProduct({ title, location, description, photos, price }) {
  return async () => {
    const res = await Api.Products.addProduct({
      title,
      location,
      description,
      photos,
      price,
    });
  };
}
