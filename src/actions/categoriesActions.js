import API from '../api'

import { SET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY } from '../constants/categoriesConstants';
import { fetchEnd, fetchStart } from './loadingActions';

export const setCategories = (data) => {
  return {
    type: SET_CATEGORIES,
    payload: data
  }
};

export const addCategory = (data) => {
  return {
    type: ADD_CATEGORY,
    payload: data
  }
};

export const deleteCategory = (id) => {
  return {
    type: DELETE_CATEGORY,
    payload: id
  }
};

export const postCategory = (data) => (dispatch) => {
  dispatch(fetchStart());

  API.post('categories', data).then(() => {
    dispatch(fetchEnd());
    dispatch(addCategory(data));
  }).catch(e => {
    dispatch(fetchEnd());
    console.log(e)
  })
};

export const fetchCategories = () => dispatch => {
  dispatch(fetchStart());

  API.get('categories').then(response => {
    dispatch(fetchEnd());
    dispatch(setCategories(response.data))
  }).catch(e => {
    dispatch(fetchEnd());
    console.log(e)
  })
};

export const removeCategory = (id) => dispatch => {
  dispatch(fetchStart());

  API.delete(`categories/${id}`).then(() => {
    dispatch(fetchEnd());
    dispatch(deleteCategory(id))
  }).catch(e => {
    dispatch(fetchEnd());
    console.log(e)
  })
};

