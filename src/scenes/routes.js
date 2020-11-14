import { observer } from "mobx-react";
import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { useStore } from "../stores/createStore";
import Auth from "./Auth/Auth";
import Main from "./Main/Main";

export const routes = {
  home: "/",
  login: "/auth/login",
  auth: "/auth",
  register: "/auth/register",
  resetPass: "/auth/resetpass",
  product: "/products/:productId",
  addProduct: "/addproduct",
  user: "/users/:userId",
  chat: "/inbox/:chatId",
  inbox: "/inbox",
  editProfile: "/editprofile",
};

export const PrivateRoute = observer(({ component: Component, ...props }) => {
  const store = useStore();

  return (
    <Route
      {...props}
      render={(...renderProps) =>
        store.auth.isLoggedIn ? (
          <Redirect to={routes.home} />
        ) : (
          <Component {...renderProps} />
        )
      }
    />
  );
});

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={routes.auth} component={Auth}></PrivateRoute>
        <Route component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default observer(Router);
