import React from "react";
import classes from "./Table.module.css";
import Serving from "./Serving/Serving";

export default ({ price, ingredients }) => {
  const sides = {
    top: [],
    right: [],
    bottom: [],
    left: [],
  };

  let count = 1;
  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      if (count % 4 == 0 && sides.top.length < 3) {
        sides.top.push(<Serving key={ingredient + i} type={ingredient} />);
      } else if (count % 3 == 0 && sides.right.length < 3) {
        sides.right.push(<Serving key={ingredient + i} type={ingredient} />);
      } else if (count % 2 == 0 && sides.bottom.length < 3) {
        sides.bottom.push(<Serving key={ingredient + i} type={ingredient} />);
      } else if (count % 1 == 0 && sides.left.length < 3) {
        sides.left.push(<Serving key={ingredient + i} type={ingredient} />);
      }

      count++;
    }
  });

  return (
    <div className={classes.Table}>
      <div className={classes.binner}>
        <div className={classes.top}>{sides.top}</div>
        <div className={classes.leftRight}>
          <div className={classes.left}>{sides.left}</div>
          <div className={classes.right}>{sides.right}</div>
        </div>
        <div className={classes.bottom}>{sides.bottom}</div>
      </div>
      <span className={classes.price}>Price: {price} som</span>
    </div>
  );
};
