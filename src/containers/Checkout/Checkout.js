import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";

export default () => {
  const ingredients = {
    fish: 0,
    crab: 0,
    salmon: 0,
    lobster: 0,
    shrimp: 0,
    cavior: 0,
  };
  const price = 123;
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary ingredients={ingredients} price={price} />
    </div>
  );
};
