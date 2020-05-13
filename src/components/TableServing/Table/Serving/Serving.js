import React from "react";
import classes from "./Serving.module.css";

export default ({ type }) => {
  const ServingClasses = [classes.Serving, classes[type]];

  return <span className={ServingClasses.join(" ")}></span>;
};
