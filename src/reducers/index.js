import { combineReducers } from 'redux';

import { categoriesReducer } from './categoriesReducer';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  categories: categoriesReducer,
  loading: loadingReducer
});
