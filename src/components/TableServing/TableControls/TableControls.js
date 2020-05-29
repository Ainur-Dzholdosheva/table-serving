import React from "react";
import classes from "./TableControls.module.css";
import TableControl from "./TableControl/TableControl.js";
import Button from "../../UI/Button/Button.js";

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <TableControl
      key={ingredient}
      ingredient={ingredient}
      label={ingredients[ingredient].label}
      disabled={ingredients[ingredient].quantity === 0}
    />
  ));
  return (
    <div className={classes.TableControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
