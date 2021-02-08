import { combineReducers } from 'redux';
import burgerMenuReducer from './burger-menu/burger-menu.reducer';

export default combineReducers({
  burgerMenu: burgerMenuReducer
});