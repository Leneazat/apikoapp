import { observer } from "mobx-react";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../Home/Home";
import { routes } from "../routes";
import ProductView from "../ProductView/ProductView";
import UserView from "../UserView/UserView";
import AddProduct from "../AddProduct/AddProduct";
import InboxView from "../Inbox/InboxView";
import EditProfile from "../EditProfile/EditProfile";
import { useStore } from "../../stores/createStore";

export const PrivateUnloggedRoute = observer(
  ({ component: Component, ...props }) => {
    const store = useStore();

    return (
      <Route
        {...props}
        render={(...renderProps) =>
          store.auth.isLoggedIn ? (
            <Component {...renderProps} />
          ) : (
            <Redirect to={routes.login} />
          )
        }
      />
    );
  }
);

export const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.product} component={ProductView} />
        <Route path={routes.user} component={UserView} />
        <Route path={routes.addProduct} component={AddProduct} />
        <PrivateUnloggedRoute path={routes.inbox} component={InboxView} />
        <PrivateUnloggedRoute
          path={routes.editProfile}
          component={EditProfile}
        />
      </Switch>
    </>
  );
};

export default observer(Main);
