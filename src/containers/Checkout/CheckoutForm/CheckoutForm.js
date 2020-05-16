import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./CheckoutForm.module.css";

export default ({ checkoutFinish }) => {
  return (
    <form onSubmit={checkoutFinish} className={classes.CheckoutForm}>
      <input type="text" placeholder="Name" required />
      <input type="phone" placeholder="Phone" required />
      <input type="text" placeholder="Address" required />
      Delivery
      <label>
        <input type="radio" name="delivery" value="fast" required />
        Fast
      </label>
      <label>
        <input type="radio" name="delivery" value="regular" required />
        Regular
      </label>
      <Button green>Finish</Button>
    </form>
  );
};
