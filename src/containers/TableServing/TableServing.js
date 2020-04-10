import React, {useState} from 'react';
import TableKit from '../../components/TableServing/TableKit/TableKit';
import classes from './TableServing.module.css';
import TableControls from '../../components/TableServing/TableControls/TableControls.js';

export default () => {

  const [ingredients, setIngredients]=useState({
     fish:1,
     crab:1,
     salmon:1,
  });
  function addIngredient(type){
   const newIngredients={...ingredients};
   newIngredients[type]++;
   setIngredients(newIngredients);
  };

  function removeIngredient(type){
    if(ingredients[type]>=1){
    const newIngredients={...ingredients};
    newIngredients[type]--;
    setIngredients(newIngredients);
  }};
  
  return(
    <div className={classes.TableServing}>
      <TableKit ingredients={ingredients}/>
      <TableControls addIngredient={addIngredient}
      removeIngredient={removeIngredient}/>  
    </div>
  )};