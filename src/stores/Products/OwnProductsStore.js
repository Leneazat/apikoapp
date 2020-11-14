import { types, getParent } from "mobx-state-tree";
import Api from "../../api";
import { asyncModel } from "../utils";
import { ProductModel } from "./ProductModel";
import { OwnProducts as OwnProductSchema } from "../schemas";

export const OwnProducts = types
  .model("OwnProductsStore", {
    items: types.array(types.reference(types.late(() => ProductModel))),

    fetch: asyncModel(fetchOwnProducts),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchOwnProducts() {
  return async function fetchOwnProductsFlow(flow, store) {
    const res = await Api.Products.byUserId(getParent(store).id);

    const result = flow.merge(res.data.list, OwnProductSchema);

    store.setItems(result);
  };
}
