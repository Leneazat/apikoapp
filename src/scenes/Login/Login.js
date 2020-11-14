import React from "react";
import { useHistory } from "react-router";
import { LoginForm } from "../Auth/components/LoginForm/LoginForm";
import { routes } from "../routes";
import { useStore } from "../../stores/createStore";
import { observer } from "mobx-react";

export const Login = () => {
  const history = useHistory();
  const store = useStore();

  async function onSubmit({ email, password }) {
    await store.auth.login.run({ email, password }, () =>
      history.push(routes.home)
    );
  }

  return (
    <div>
      {store.auth.login.isLoading ? (
        <div>Loading...</div>
      ) : (
        <LoginForm onSubmit={onSubmit}></LoginForm>
      )}
    </div>
  );
};

export default observer(Login);
