import { observer } from "mobx-react";
import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Home/Home";
import { routes } from "../routes";
import ProductView from "../ProductView/ProductView";
import UserView from "../UserView/UserView";
import AddProduct from "../AddProduct/AddProduct";
import InboxView from "../Inbox/InboxView";
import EditProfile from "../EditProfile/EditProfile";

export const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.product} component={ProductView} />
        <Route path={routes.user} component={UserView} />
        <Route path={routes.addProduct} component={AddProduct} />
        <Route path={routes.inbox} component={InboxView} />
        <Route path={routes.editProfile} component={EditProfile} />
      </Switch>
    </>
  );
};

export default observer(Main);
