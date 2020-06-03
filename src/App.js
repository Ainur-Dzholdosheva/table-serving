import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import TableServing from "./containers/TableServing/TableServing";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";

export default () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <TableServing />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
