import { types } from "mobx-state-tree";
import Api from "../api";
import { asyncModel } from "./utils";

export const UploadStore = types
  .model("UploadStore", {
    images: types.array(types.string),
    uploadImage: asyncModel(uploadImage),
  })
  .actions((store) => ({
    getImages() {
      return [...store.images];
    },
    clearStore() {
      store.images = [];
    },
    addImage(url) {
      store.images.push(url);
    },
  }));

function uploadImage(file) {
  return async (flow, store) => {
    try {
      const res = await Api.Uploads.uploadImage(file);
      store.addImage(res.data);
    } catch (err) {
      console.log(err);
    }
  };
}
