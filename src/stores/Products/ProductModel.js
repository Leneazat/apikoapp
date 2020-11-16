import { types, getRoot, getSnapshot } from "mobx-state-tree";
import Api from "../../api";
import { ChatSchema } from "../schemas";
import { UserModel } from "../Users/UserModel";
import { asyncModel } from "../utils";
import { safeReference } from "../ViewerStore";

export const ProductModel = types
  .model("ProductModel", {
    id: types.identifierNumber,
    ownerId: types.maybeNull(types.number),
    title: types.string,
    description: types.maybeNull(types.string),
    photos: types.maybeNull(types.array(types.string)),
    location: types.string,
    price: types.number,
    saved: false,
    createdAt: types.string,
    updatedAt: types.string,
    owner: types.maybe(safeReference(types.late(() => UserModel))),
    createChat: asyncModel(createChat, false),
  })

  .preProcessSnapshot((snapshot) => ({
    ...snapshot,
    owner: snapshot.ownerId,
  }))

  .actions((store) => ({
    fetchOwner() {
      getRoot(store).entities.users.getById.run(store.ownerId);

      store.owner = store.ownerId;
    },
  }));

function createChat(message) {
  return async function createChatFlow(flow, store) {
    let chatId;
    try {
      flow.start();
      const res = await Api.Chats.createChat(store.id, message);
      chatId = res.data.id;

      res.data.participants = [getSnapshot(store.owner)];

      flow.merge(res.data, ChatSchema);

      flow.success();
    } catch (err) {
      flow.error(err);
      throw err;
    }

    return chatId;
  };
}
