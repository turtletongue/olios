import { TOGGLE_HAMBURGER } from './hamburger-menu.constants';

const initialState = {
  isOpen: false
};

const hamburgerMenuReducer = (state=initialState, action={}) => {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export default hamburgerMenuReducer;