import React from 'react'
import classes from './TableControl.module.css'

export default({label}) =>{
    return(
        <div className={classes.TableControl}>
          <span className={classes.label}>{label}</span> 
              <button className={classes.less}>less</button>
              <button className={classes.more}>more</button>
        </div>
    )
}