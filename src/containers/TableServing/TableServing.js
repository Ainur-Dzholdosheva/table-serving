import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import Table from "../../components/TableServing/Table/Table";
import TableControls from "../../components/TableServing/TableControls/TableControls.js";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/TableServing/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withAxios from "../../hoc/withAxios/withAxios";
import classes from "./TableServing.module.css";
import { load } from "../../store/actions/builder";

export default withAxios(() => {
  const { ingredients, price } = useSelector((state) => state.builder);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  function startOrder() {
    if (isAuthenticated) {
      setIsOrdering(true);
    } else {
      history.push("/auth?checkout");
    }
  }

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
          startOrder={startOrder}
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
