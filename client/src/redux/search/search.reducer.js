import { INPUT_CHANGED } from './search.constants';

const initialState = {
  input: ''
};

const searchReducer = (state=initialState, action={}) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return { ...state, input: action.payload };
    default:
      return state;
  }
}

export default searchReducer;