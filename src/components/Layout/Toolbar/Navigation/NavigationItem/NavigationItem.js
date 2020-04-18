import React from 'react';
import classes from './NavigationItem.module.css';

export default({children, url, active}) => {
    return(
        <div className={classes.NavigationItem}>
         <li>
             <a href={url} className={active ? classes.active: null}>{children}</a></li>
        </div>
    )
}