import { LOADING_STARTED, LOADING_FINISHED } from './loading.constants';

const initialState = {
  isLoading: false
};

const loadingReducer = (state=initialState, action={}) => {
  switch (action.type) {
    case LOADING_STARTED:
      return { ...state, isLoading: true };
    case LOADING_FINISHED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default loadingReducer;