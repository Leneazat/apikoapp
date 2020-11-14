import { types } from "mobx-state-tree";

export const ImageModel = types.model("ImageModel", {
  url: types.string,
});
