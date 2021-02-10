import { INPUT_CHANGED } from './search.constants';

export const changeInput = (newInputData) => ({
  type: INPUT_CHANGED,
  payload: newInputData
});