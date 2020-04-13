import React, {useState} from 'react';
import TableKit from '../../components/TableServing/TableKit/TableKit';
import classes from './TableServing.module.css';
import TableControls from '../../components/TableServing/TableControls/TableControls.js';

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
  function addIngredient(type){
   const newIngredients={...ingredients};
   newIngredients[type]++;
   setIngredients(newIngredients);

   const newPrice = price + PRICES[type];
   setPrice(newPrice);
  };

  function removeIngredient(type){
    if(ingredients[type]>=1){
    const newIngredients={...ingredients};
    newIngredients[type]--;
    setIngredients(newIngredients);

    const newPrice = price - PRICES[type];
   setPrice(newPrice);
  }};
  
  return(
    <div className={classes.TableServing}>
      <TableKit price={price} ingredients={ingredients}/>
      <TableControls 
      ingredients={ingredients}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}/>  
    </div>
  )};