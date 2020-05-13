import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import TableServing from "./containers/TableServing/TableServing";
import Checkout from "./containers/Checkout/Checkout";

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
