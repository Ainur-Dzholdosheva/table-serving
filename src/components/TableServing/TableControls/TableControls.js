import React from 'react';
import classes from './TableControls.module.css';
import TableControl from './TableControl/TableControl.js'

const CONTROLS = [
    {label:"Fish", type:"fish"},
    {label:"Crab", type:"crab"},
    {label:"Salmon", type:"salmon"},
];
export default({addIngredient, removeIngredient}) => {
    
    const controlsOutput = CONTROLS.map(control => 
    <TableControl control={control} 
    addIngredient={addIngredient} 
    removeIngredient={removeIngredient} />)
    return(
    <div className={classes.TableControls}>
         {controlsOutput}
    </div>
    )
}