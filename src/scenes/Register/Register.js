import { observer } from "mobx-react";
import React from "react";
import { useHistory } from "react-router";
import { RegistrationForm } from "../Auth/components/RegistrationForm/RegistrationForm";
import { routes } from "../routes";
import { useStore } from "../../stores/createStore";

export const Register = () => {
  const history = useHistory();
  const store = useStore();

  async function onSubmit({ fullName, email, password }) {
    await store.auth.register.run({ fullName, email, password }, () =>
      history.push(routes.home)
    );
  }

  return <RegistrationForm onSubmit={onSubmit}></RegistrationForm>;
};

export default observer(Register);
