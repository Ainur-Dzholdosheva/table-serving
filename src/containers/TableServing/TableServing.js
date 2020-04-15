import React, {useState} from 'react';
import TableKit from '../../components/TableServing/TableKit/TableKit';
import classes from './TableServing.module.css';
import TableControls from '../../components/TableServing/TableControls/TableControls.js';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/TableServing/OrderSummary/OrderSummary";

const PRICES={
  fish:150,
  crab:250,
  salmon:180,
  lobster:150,
  shrimp:170,
  cavior:200,
};
export default () => {

  const [ingredients, setIngredients]=useState({
     fish:0,
     crab:0,
     salmon:0,
     lobster:0,
     shrimp:0,
     cavior:0,
  });
  const [price, setPrice]=useState(100);
  const[canOrder, setCanOrder]=useState(false);
  const [isOrdering, setIsOrdering] = useState(false);


  function checkCanOrder(ingredients){
    const total=Object.keys(ingredients).reduce((total, ingredient) => {
      return total + ingredients[ingredient];
    },0);
    setCanOrder(total > 0);
  }
  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    alert("You are on the checkout page!");
  }
  
  function addIngredient(type){
   const newIngredients={...ingredients};
   newIngredients[type]++;
   setIngredients(newIngredients);

   const newPrice = price + PRICES[type];
   setPrice(newPrice);
   checkCanOrder(newIngredients);
  };

  function removeIngredient(type){
    if(ingredients[type]>=1){
    const newIngredients={...ingredients};
    newIngredients[type]--;
    setIngredients(newIngredients);
    checkCanOrder(newIngredients);

    const newPrice = price - PRICES[type];
   setPrice(newPrice);
   
  }};
  
  return(
    <div className={classes.TableServing}>
      <TableKit price={price} ingredients={ingredients}/>
      <TableControls 
       startOrder={startOrder}
       canOrder={canOrder}
      ingredients={ingredients}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      />  
     
     <Modal show={isOrdering} hideCallback={cancelOrder}>
        <OrderSummary
          ingredients={ingredients}
          finishOrder={finishOrder}
          cancelOrder={cancelOrder}
          price={price}
        />
      </Modal>
    </div>
  );
  }
