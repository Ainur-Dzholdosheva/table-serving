import React from "react";
import classes from "./Serving.module.css";

export default ({ type }) => {
  const ServingClasses = [classes.Serving];
  switch (type) {
    case "fish":
      ServingClasses.push(classes.fish);
      break;

    case "crab":
      ServingClasses.push(classes.crab);
      break;

    case "salmon":
      ServingClasses.push(classes.salmon);
      break;

    case "lobster":
      ServingClasses.push(classes.lobster);
      break;

    case "shrimp":
      ServingClasses.push(classes.shrimp);
      break;

    case "cavior":
    default:
      ServingClasses.push(classes.cavior);
      break;
  }

  return <span className={ServingClasses.join(" ")}></span>;
};
