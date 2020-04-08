import React, {useState} from 'react';
import TableKit from '../../components/TableServing/TableKit/TableKit';
import classes from './TableServing.module.css';

export default () => {

  const [ingredients, setIngredients]=useState({
     fish:5,
     crab:3,
     salmon:4,
  });
  return(
    <div className={classes.TableServing}>
      <TableKit ingredients={ingredients}/>
      TableControls  
    </div>
  )};