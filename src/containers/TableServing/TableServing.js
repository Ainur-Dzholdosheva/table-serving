import React, {useState} from 'react';
import TableKit from '../../components/TableServing/TableKit/TableKit';
import classes from './TableServing.module.css';

export default () => {

  const [ingredients, setIngredients]=useState({
     fish:1,
     crab:1,
     salmon:1,
  });
  return(
    <div className={classes.TableServing}>
      <TableKit ingredients={ingredients}/>
      TableControls  
    </div>
  )};