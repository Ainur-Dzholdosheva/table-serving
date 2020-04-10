import React from 'react';
import classes from './TableControls.module.css';
import TableControl from './TableControl/TableControl.js'

export default({addIngredient, removeIngredient}) => {
    const controls = [
        {label:"Fish", type:"fish"},
        {label:"Crab", type:"crab"},
        {label:"Salmon", type:"salmon"},
    ];

    const controlsOutput = controls.map(control => 
    <TableControl control={control} 
    addIngredient={addIngredient} 
    removeIngredient={removeIngredient} />)
    return(
    <div className={classes.TableControls}>
         {controlsOutput}
    </div>
    )
}