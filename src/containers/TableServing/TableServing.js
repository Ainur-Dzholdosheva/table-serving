import React, {useState} from 'react';
import TableKit from '../../components/TableServing/TableKit/TableKit';
import classes from './TableServing.module.css';
import TableControls from '../../components/TableServing/TableControls/TableControls.js';

const PRICES={
  fish:150,
  crab:250,
  salmon:180,
};
export default () => {

  const [ingredients, setIngredients]=useState({
     fish:0,
     crab:0,
     salmon:0,
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