import { useStore } from "../createStore";
import { UserModel } from "./UserModel";
import { asyncModel, createCollection } from "../utils";
import Api from "../../api";
import { User } from "../schemas";
import { flow } from "mobx-state-tree";

export function useUsersCollection() {
  const store = useStore();
  return store.entities.users;
}

export const UsersCollection = createCollection(UserModel, {
  getById: asyncModel(getById),
});

function getById(id) {
  return async function getByIdFlow(flow) {
    try {
      const res = await Api.Users.getById(id);
      flow.merge(res.data, User);
    } catch (err) {
      console.log(err);
    }
  };
}
