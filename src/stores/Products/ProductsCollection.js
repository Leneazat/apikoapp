import Api from "../../api";
import { useStore } from "../createStore";
import { Product } from "../schemas";
import { asyncModel, createCollection } from "../utils";
import { ProductModel } from "./ProductModel";

export function useProductsCollection() {
  const store = useStore();
  return store.entities.products;
}

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

function getProduct(id) {
  return async function getProductFlow(flow, store, Root) {
    try {
      const res = await Api.Products.getById(id);

      flow.merge(res.data, Product);
    } catch (err) {
      console.log(err);
    }
  };
}
