import React from "react";
import Table from "../../TableServing/Table/Table";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, ingredients }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Table price={price} ingredients={ingredients} />
      <Button green>Continue</Button>
      <Button red>Cancel</Button>
    </div>
  );
};
