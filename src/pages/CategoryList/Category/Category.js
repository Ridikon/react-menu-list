import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Category.module.scss';

const Category = ({categoryId, categoryTitle}) => {
  return (
    <div className={classes.category}>
      <NavLink to={`/view/${categoryId}`} className={classes.category_item}>{categoryTitle}</NavLink>
    </div>
  );
};

export default Category;
