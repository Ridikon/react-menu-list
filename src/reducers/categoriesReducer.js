import { ADD_CATEGORY, DELETE_CATEGORY, SET_CATEGORIES } from '../constants/categoriesConstants';

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
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(c => c.id !== action.payload)
      };
    default:
      return state;
  }
};
