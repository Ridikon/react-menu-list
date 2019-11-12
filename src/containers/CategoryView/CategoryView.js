import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import PositionList from './PositionList';
import Loader from '../../components/Loader';

const CategoryView = ({ categories = [] }) => {
  let { id } = useParams(),
    category = categories.find(c => +c.id === +id);

  const renderCategory = () => {
    return (
      <>
        <div>{category.title}</div>
        <PositionList positions={category.positions}/>
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

CategoryView.propTypes = {
  categories: PropTypes.array
};

export default connect(mapStateToProps)(CategoryView);
