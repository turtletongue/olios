import { QUANTITY_CHANGED } from './product.constants';

const ininitalState = {
  quantity: 1
}

const productsReducer = (state=ininitalState, action={}) => {
  switch (action.type) {
    case QUANTITY_CHANGED:
      return { ...state, quantity: +action.payload };
    default:
      return state;
  }
}

export default productsReducer;