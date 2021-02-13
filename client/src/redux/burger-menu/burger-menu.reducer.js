import { TOGGLE_MENU } from './burger-menu.constants';

const initialState = {
  isOpen: false
};

const hamburgerMenuReducer = (state=initialState, action={}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export default hamburgerMenuReducer;