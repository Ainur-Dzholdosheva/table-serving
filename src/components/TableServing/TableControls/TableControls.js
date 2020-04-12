import React from 'react';
import classes from './TableControls.module.css';
import TableControl from './TableControl/TableControl.js'

const CONTROLS = [
    {label:"Fish", type:"fish"},
    {label:"Crab", type:"crab"},
    {label:"Salmon", type:"salmon"},
];
export default({ingredients,addIngredient, removeIngredient}) => {
    
    const controlsOutput = CONTROLS.map(control => 
    <TableControl control={control} 
    addIngredient={addIngredient} 
    removeIngredient={removeIngredient}
    disabled={ingredients[control.type]===0} />)
    return(
    <div className={classes.TableControls}>
         {controlsOutput}
    </div>
    )
}