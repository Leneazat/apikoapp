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

function loginFlow({ password, email }, cb) {
  return async (flow) => {
    try {
      const res = await Api.Auth.login({ password, email });
      Api.Auth.setToken(res.data.token);
      getRoot(flow).viewer.setViewer(res.data.user);
      getRoot(flow).auth.setIsLoggedIn(true);
      cb();
    } catch (error) {
      console.log("Error while login", { error });
      alert("User is not registered");
    }
  };
}

function registerFlow({ fullName, password, email }, cb) {
  return async (flow) => {
    try {
      const res = await Api.Auth.register({ fullName, password, email });
      Api.Auth.setToken(res.data.token);
      getRoot(flow).viewer.setViewer(res.data.user);
      getRoot(flow).auth.setIsLoggedIn(true);
      cb();
    } catch (error) {
      console.log("Error while registration", { error });
      alert("This user already exists");
    }
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
  };
}
