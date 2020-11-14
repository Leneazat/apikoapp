import { useStore } from "../createStore";
import { createCollection } from "../utils";
import { ChatModel } from "./ChatModel";

export function useUsersCollection() {
  const store = useStore();
  return store.entities.users;
}

export const ChatsCollection = createCollection(ChatModel);
