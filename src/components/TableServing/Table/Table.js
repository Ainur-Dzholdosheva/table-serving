import React from "react";
import classes from "./Table.module.css";
import Serving from "./Serving/Serving";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      let output = {
        classNames: ["top", "left", "right", "bottom"],
        index: 0,
      };

      ingredientsOutput.push(
        <div className={output.classNames[output.index]}>
          <Serving key={ingredient + i} type={ingredient} />
        </div>
      );

      if (output.index > 3) {
        output.index = 0;
      }
    }
  });
  return (
    <div className={classes.Table}>
      {ingredientsOutput}

      <span className={classes.price}>Price: {price} som</span>
    </div>
  );
};
