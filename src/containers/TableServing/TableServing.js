import React, { useState, useEffect } from "react";
import Table from "../../components/TableServing/Table/Table";
import classes from "./TableServing.module.css";
import TableControls from "../../components/TableServing/TableControls/TableControls.js";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/TableServing/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const PRICES = {
  fish: 150,
  crab: 250,
  salmon: 180,
  lobster: 150,
  shrimp: 170,
  cavior: 200,
};
export default withErrorHandler(() => {
  const [ingredients, setIngredients] = useState(null);
  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [Loading, setLoading] = useState(false);

  function checkCanOrder(ingredients) {
    const total = Object.keys(ingredients).reduce((total, ingredient) => {
      return total + ingredients[ingredient];
    }, 0);
    setCanOrder(total > 0);
  }
  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    const order = {
      ingredients: ingredients,
      price: price,
      delivery: "fast",
      customer: {
        name: "Ainur",
        phone: "0700500600",
        address: {
          street: "Lenina 7",
          city: "Tup",
        },
      },
    };
    setLoading(true);
    axios.post("/orders.json", order).then((response) => {
      setLoading(false);
      setIsOrdering(false);
    });
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
    checkCanOrder(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);
      checkCanOrder(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }
  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => setIngredients(response.data));
  }, []);

  let output = <Spinner />;
  if (ingredients) {
    output = (
      <>
        <Table price={price} ingredients={ingredients} />
        <TableControls
          startOrder={startOrder}
          canOrder={canOrder}
          ingredients={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (!Loading && isOrdering) {
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        finishOrder={finishOrder}
        cancelOrder={cancelOrder}
        price={price}
      />
    );
  }

  return (
    <div className={classes.TableServing}>
      {output}
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
