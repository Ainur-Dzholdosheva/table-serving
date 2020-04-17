import React from 'react';
import classes from './NavigationItem.module.css';

export default({children, url}) => {
    return(
        <div className={classes.NavigationItem}>
         <li><a href={url}>{children}</a></li>
        </div>
    )
}