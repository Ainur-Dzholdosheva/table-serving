import React from 'react'
import classes from './TableControl.module.css'

export default({control, removeIngredient, addIngredient}) =>{
    return(
        <div className={classes.TableControl}>
          <span className={classes.label}>{control.label}</span> 
              <button className={classes.less} 
              onClick={() => removeIngredient(control.type)}>less</button>
              <button className={classes.more} onClick={() => addIngredient(control.type)}>more</button>
        </div>
    )
}