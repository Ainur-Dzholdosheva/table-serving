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
     
        SeaFoodClasses.push(classes.salmon);
      break;

    case 'lobster':
        
          SeaFoodClasses.push(classes.lobster);
        break;

    case 'shrimp':
        
          SeaFoodClasses.push(classes.shrimp);
        break;

    case 'cavior':
        default:
          SeaFoodClasses.push(classes.cavior);
        break;

  }
  
  return(
    <span className={SeaFoodClasses.join(' ')}>
      
    </span>
);
};