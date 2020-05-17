import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";

export default () => (
  <ul className={classes.Nav}>
    <NavItem url="/builder">Sea food binner</NavItem>
    <NavItem url="/orders">Orders</NavItem>
  </ul>
);
