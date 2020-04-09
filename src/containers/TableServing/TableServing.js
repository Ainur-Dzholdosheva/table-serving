import React, {useState} from 'react';
import TableKit from '../../components/TableServing/TableKit/TableKit';
import classes from './TableServing.module.css';
import TableControls from '../../components/TableServing/TableControls/TableControls.js';

export default () => {

  const [ingredients, setIngredients]=useState({
     fish:2,
     crab:2,
     salmon:2,
  });
  return(
    <div className={classes.TableServing}>
      <TableKit ingredients={ingredients}/>
      <TableControls/>  
    </div>
  )};