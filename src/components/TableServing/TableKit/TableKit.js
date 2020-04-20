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
    
      <div className="first"> {ingredientsOutput}</div>
      <div className="second"></div>
      <div className="third"></div>
      <div className="fourth"></div>
      <div className={classes.price}> {price} som</div>
     </div>
  )};