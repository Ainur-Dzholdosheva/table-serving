import React from 'react';
import classes from './TableKit.module.css';
import SeaFood from './SeaFood/SeaFood';

export default ({ingredients}) => {
 let ingredientsOutput=[];

 Object.keys(ingredients).forEach(type => {
   for(let i=0; i<ingredients[type]; i++){
     ingredientsOutput.push(<SeaFood key={type+i} type={type} />);
   }
 });
  return(
    <div className={classes.TableKit}>
     
      <div></div>
       
     
      <div></div>
      <div></div>
      <div>{ingredientsOutput}</div>
      
     
     
    </div>
  )};