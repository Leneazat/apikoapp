import React from "react";
import { Header } from "../../components";
import { Switch } from "react-router-dom";
import { PrivateRoute, routes } from "../routes";
import { Login } from "../Login/Login";
import { ResetPass } from "./components/ResetPass/ResetPass";
import { Register } from "../Register/Register";
import { observer } from "mobx-react";

function Auth() {
  return (
    <>
      <Header isLight={true} withSearchBar={false}></Header>
      <Switch>
        <PrivateRoute path={routes.login} component={Login}></PrivateRoute>
        <PrivateRoute
          path={routes.resetPass}
          component={ResetPass}></PrivateRoute>
        <PrivateRoute
          path={routes.register}
          component={Register}></PrivateRoute>
      </Switch>
    </>
  );
}

export default observer(Auth);
