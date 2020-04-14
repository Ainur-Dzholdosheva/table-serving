import React from 'react';
import classes from './TableKit.module.css';
import SeaFood from './SeaFood/SeaFood';

export default ({price,ingredients}) => {
 let ingredientsOutput=[];

 Object.keys(ingredients).forEach(type => {
   for(let i=0; i<ingredients[type]; i++){
     ingredientsOutput.push(<SeaFood key={type+i} type={type} />);
   }
   
 });
  return(
    <div className={classes.TableKit}>
    
      <div> {ingredientsOutput}</div>
      <div></div>
      <div></div>
      <div>{ingredientsOutput}</div>
      <div className={classes.price}>Total price {price} som</div>
     </div>
  )};