import { ADD_TO_BASKET, REMOVE_FROM_BASKET, CLEAR_FROM_BASKET, CLEAR_BASKET } from './basket.constans';
import { appendItemToBasket, clearBasketItem, removeItemFrombasket } from './basket.utils';

const ininitalState = {
  products: []
}

const basketReducer = (state=ininitalState, action={}) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, products: appendItemToBasket(state.products, action.payload) };
    case CLEAR_FROM_BASKET:
      return { ...state, products: clearBasketItem(state.products, action.payload) };
    case REMOVE_FROM_BASKET:
      return { ...state, products: removeItemFrombasket(state.products, action.payload) };
    case CLEAR_BASKET:
      return ininitalState;
    default:
      return state;
  }
}

export default basketReducer;