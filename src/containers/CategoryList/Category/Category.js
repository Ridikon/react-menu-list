import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Category.module.scss';

const Category = ({categoryId, categoryTitle, onDelete}) => {
  const onDeleteHandler = () => {
    onDelete(categoryId)
  };

  return (
    <div className={classes.category}>
      <NavLink
        to={`/view/${categoryId}`}
        className={classes.category_item}
      >
        {categoryTitle}
      </NavLink>

      <span onClick={onDeleteHandler} className={classes.delete}>Delete</span>
    </div>
  );
};

Category.propTypes = {
  categoryId: PropTypes.number,
  categoryTitle: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Category;
