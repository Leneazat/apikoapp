import { getRoot, types } from "mobx-state-tree";
import { asyncModel } from "../utils";
import Api from "../../api";

export const AuthStore = types
  .model("AuthStore", {
    login: asyncModel(loginFlow),
    register: asyncModel(registerFlow),
    isLoggedIn: false,
    editAccount: asyncModel(editAccount),
  })

  .actions((store) => ({
    setIsLoggedIn(value) {
      store.isLoggedIn = value;
    },

    logout() {
      store.isLoggedIn = false;
      Api.Auth.logout();
    },
  }));

function loginFlow({ password, email }) {
  return async (flow) => {
    const res = await Api.Auth.login({ password, email });
    Api.Auth.setToken(res.data.token);
    getRoot(flow).viewer.setViewer(res.data.user);
    getRoot(flow).auth.setIsLoggedIn(true);
  };
}

function registerFlow({ fullName, password, email }) {
  return async (flow) => {
    const res = await Api.Auth.register({ fullName, password, email });
    Api.Auth.setToken(res.data.token);
    getRoot(flow).viewer.setViewer(res.data.user);
    getRoot(flow).auth.setIsLoggedIn(true);
  };
}

function editAccount({ fullName, avatar, phone, location }) {
  return async (flow) => {
    const res = await Api.Auth.editAccount({
      fullName,
      avatar,
      phone,
      location,
    });
    getRoot(flow).viewer.setViewer(res.data.user);
    console.log(888, res.data);
  };
}
