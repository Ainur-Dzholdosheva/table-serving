import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const ingredients = {
    fish: 0,
    crab: 0,
    salmon: 0,
    lobster: 0,
    shrimp: 0,
    cavior: 0,
  };
  const price = 100;

  function checkoutCancel() {
    history.push("/builder");
  }
  function checkoutContinue() {
    history.push("/checkout/finish");
  }
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};
