import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import TableServing from "./containers/TableServing/TableServing";
import Checkout from "./containers/Checkout/Checkout";
import { Switch, Route, Redirect } from "react-router-dom";

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
        </Switch>
      </Layout>
    </div>
  );
};
