import React from "react";
import Table from "../../TableServing/Table/Table";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, ingredients, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Table price={price} ingredients={ingredients} />
      <Button click={checkoutCancel} red>
        Cancel
      </Button>
      <Button click={checkoutContinue} green>
        Continue
      </Button>
    </div>
  );
};
