import React from 'react';
import classes from './TableKit.module.css';
import SeaFood from './SeaFood/SeaFood';

export default () => (
    <div className={classes.TableKit}>
      <SeaFood type="fish"/> 
      <SeaFood type="crab"/>
      <SeaFood type="salmon"/>
     
    </div>
);