import { LOADING_END, LOADING_START } from '../constants/loadingConstants';

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
