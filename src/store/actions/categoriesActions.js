import API from '../../api'

import { SET_CATEGORIES } from '../constants';
import { fetchEnd, fetchStart } from './loadingActions';

export const setCategories = (data) => {
  return {
    type: SET_CATEGORIES,
    payload: data
  }
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

