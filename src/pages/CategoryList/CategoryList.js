import React from 'react';

import Category from './Category';
import Loader from '../../components/Loader';

const CategoryList = ({ categories, loading }) => {
  return (
    <div className="categoryList">
      {!loading ?
        categories.map(category => (
          <Category
            key={category.id}
            categoryId={category.id}
            categoryTitle={category.title}
          />)
        ) : <Loader/>}
    </div>
  );
};

export default CategoryList;
