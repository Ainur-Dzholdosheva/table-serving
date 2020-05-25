import React from "react";
import logo from "../../../assets/image54.png";
import classes from "./Logo.module.css";

export default () => (
  <div className={classes.Logo}>
    <img src={logo} alt="Sea food binner" />
    <span> Sea food binner</span>
  </div>
);
