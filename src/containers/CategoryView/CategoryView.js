import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import PositionList from './PositionList';
import Loader from '../../components/Loader';
import { fetchCategories, updateCategory } from '../../actions/categoriesActions';

const CategoryView = ({ categories = [], fetchCategories, updateCategory }) => {
  useEffect(() => {
    if (!categories.length) fetchCategories()
  });

  let { id } = useParams(),
    category = categories.find(c => +c.id === +id);

  const addNewPosition = (position) => {
    category.positions = [...category.positions, position]
    updateCategory(category)
  };

  const deletePosition = (id) => {
    const index = category.positions.findIndex(c => c.id === id);
    category.positions.splice(index, 1);
    updateCategory(category)
  };

  const renderCategory = () => {
    return (
      <>
        <div>{category.title}</div>
        <PositionList deletePosition={deletePosition} addPosition={addNewPosition} positions={category.positions}/>
      </>
    )
  };

  return category ? renderCategory() : <Loader/>;
};

const mapStateToProps = (store) => {
  return {
    categories: store.categories.categories
  }
};

const mapDispatchToProps = {
  fetchCategories,
  updateCategory
};

CategoryView.propTypes = {
  categories: PropTypes.array,
  fetchCategories: PropTypes.func,
  updateCategory: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);
