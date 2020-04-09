import React from 'react';
import classes from './TableControls.module.css';
import TableControl from './TableControl/TableControl.js'

export default() => {
    const controls = [
        {label:"Fish", type:"fish"},
        {label:"Crab", type:"crab"},
        {label:"Salmon", type:"salmon"},
    ];

    const controlsOutput = controls.map(control => <TableControl label={control.label} />)
    return(
    <div className={classes.TableControls}>
         {controlsOutput}
    </div>
    )
}