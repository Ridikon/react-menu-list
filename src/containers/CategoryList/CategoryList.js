import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Category from './Category';
import Loader from '../../components/Loader';
import { fetchCategories, removeCategory } from '../../actions/categoriesActions';

const CategoryList = ({ categories, loading, fetchCategories, removeCategory }) => {
  useEffect(() => {
    if (!categories.length) fetchCategories();
  });

  const renderCategories = () => {
    return categories.map(category => (
      <Category
        onDelete={onDelete}
        key={category.id}
        categoryId={category.id}
        categoryTitle={category.title}
      />)
    )
  };

  const onDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      removeCategory(id)
    }
  };

  return (
    <div className="categoryList">
      {!loading ? renderCategories() : <Loader/>}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array,
  loading: PropTypes.bool,
  fetchCategories: PropTypes.func,
  removeCategory: PropTypes.func
};

const mapStateToProps = (store) => {
  return {
    loading: store.loading.loading,
    categories: store.categories.categories
  }
};

const mapDispatchToProps = {
  fetchCategories,
  removeCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
