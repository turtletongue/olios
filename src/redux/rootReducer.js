import { combineReducers } from 'redux';
import hamburgerMenuReducer from './hamburger-menu/hamburger-menu.reducer';

export default combineReducers({
  hamburgerMenu: hamburgerMenuReducer
});