import { types } from "mobx-state-tree";
import Api, { SocketApi } from "../api";
import { AuthStore } from "./Auth/AuthStore";
import { ViewerStore } from "./ViewerStore";
import { LatestProductsStore } from "./Products/LatestProductsStore";
import { EntitiesStore } from "./EntitiesStore";
import { UploadStore } from "./UploadStore";
import { ChatStore } from "./Chats/ChatStore";

export const RootStore = types
  .model("RootStore", {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    chats: types.optional(ChatStore, {}),
    entities: types.optional(EntitiesStore, {}),
    uploads: types.optional(UploadStore, {}),
  })
  .actions((store) => ({
    async bootstrap() {
      try {
        const token = window.localStorage.getItem("___token");

        if (!token) {
          return;
          // throw new Error("Unauthorized");
        }

        Api.Auth.setToken(token);
        SocketApi.init(token);

        const res = await Api.Account.getUser();
        store.viewer.setViewer(res.data);
        store.auth.setIsLoggedIn(true);

        store.subscribeToEvents();
      } catch (err) {
        console.log(err);
      }
    },

    subscribeToEvents() {
      SocketApi.handleMessages((message) => {
        store.chats.handleMessage(message);
      });
    },
  }));
