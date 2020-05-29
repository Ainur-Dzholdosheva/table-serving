import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import Table from "../../components/TableServing/Table/Table";
import TableControls from "../../components/TableServing/TableControls/TableControls.js";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/TableServing/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./TableServing.module.css";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";

export default withErrorHandler(() => {
  const { ingredients, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (ingredients) {
    const canOrder = () =>
      Object.values(ingredients).reduce((canOrder, ingredient) => {
        return !canOrder ? ingredient.quantity > 0 : canOrder;
      }, false);

    output = (
      <>
        <Table price={price} ingredients={ingredients} />
        <TableControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder(ingredients)}
          ingredients={ingredients}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            ingredients={ingredients}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
          />
        </Modal>
      </>
    );
  }
  return (
    <div className={classes.TableServing}>
      <h1>Sea food binner</h1>
      {output}
    </div>
  );
}, axios);
