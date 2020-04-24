import React from 'react';
import classes from './TableKit.module.css';
import SeaFood from './SeaFood/SeaFood';

export default ({price,ingredients}) => {
 let ingredientsOutput=[];

 Object.keys(ingredients).forEach(type => {
   for(let i=0; i < ingredients[type]; i++) {
    let output = {
      classNames: [
        "first",
        "second",
        "third",
        "fourth",
      ], 
      index: 0

      
    }
    
    ingredientsOutput.push(
      <div className={output.classNames[output.index]}> 
        <SeaFood key={type+i} type={type} />
      </div>
    );

    if (output.index >3) {
      output.index = 0
    }
   }
   
 });
  return(
    <div className={classes.TableKit}>
      {ingredientsOutput}
      <span className={classes.price}> {price} som</span>
     </div>
  )};