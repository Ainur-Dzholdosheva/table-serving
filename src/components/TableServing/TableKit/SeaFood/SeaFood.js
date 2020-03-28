import React from 'react';
import classes from './SeaFood.module.css';


export default ({type}) => {
  const SeaFoodClasses = [classes.SeaFood];
  switch (type){
    case 'fish':
      SeaFoodClasses.push(classes.fish);
      break;

    case 'crab':
      
      SeaFoodClasses.push(classes.crab);
      break;

    case 'salmon':
      default:
        SeaFoodClasses.push(classes.salmon);
      break;
  }
  
  return(
    <div className={SeaFoodClasses.join(' ')}>
      
    </div>
);
};