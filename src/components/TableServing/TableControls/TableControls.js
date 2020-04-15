import React from 'react';
import classes from './TableControls.module.css';
import TableControl from './TableControl/TableControl.js'
import Button from "../../UI/Button/Button.js";

const CONTROLS = [
    {label:"Fish", type:"fish"},
    {label:"Crab", type:"crab"},
    {label:"Salmon", type:"salmon"},
    {label:"Lobster", type:"lobster"},
    {label:"Caviar", type:"cavior"},
    {label:"Shrimp", type:"shrimp"},
];
export default({startOrder, canOrder,ingredients,addIngredient, removeIngredient}) => {
    
    const controlsOutput = CONTROLS.map(control => 
    <TableControl control={control} 
    addIngredient={addIngredient} 
    removeIngredient={removeIngredient}
    disabled={ingredients[control.type]===0} />)
    return(
    <div className={classes.TableControls}>
         {controlsOutput}
         <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
    )
}