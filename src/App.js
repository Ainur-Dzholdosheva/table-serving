import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import TableServing from "./containers/TableServing/TableServing";
import Checkout from "./containers/Checkout/Checkout";

export default () => {
  return (
    <div className="App">
      <Layout>
        <TableServing />
        <Checkout />
      </Layout>
    </div>
  );
};
