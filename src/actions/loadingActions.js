import { LOADING_END, LOADING_START } from '../constants';

export const fetchStart = () => {
  return {
    type: LOADING_START
  }
};

export const fetchEnd = () => {
  return {
    type: LOADING_END
  }
};
