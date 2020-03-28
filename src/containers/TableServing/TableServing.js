import React from 'react';
import TableKit from '../../components/TableServing/TableKit/TableKit';
import classes from './TableServing.module.css';

export default () => (
    <div className={classes.TableServing}>
      <TableKit/>
      TableControls  
    </div>
);