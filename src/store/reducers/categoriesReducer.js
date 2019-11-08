import { SET_CATEGORIES } from '../constants';

let initialState = {
  categories: []
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
}
