import {
  QUANTITY_CHANGED,
  FETCH_ALL_PRODUCTS_FAILURE,
  FETCH_ALL_PRODUCTS_SUCCESS
} from './products.constants';

const ininitalState = {
  quantity: 1,
  allProducts: [],
  errorMessage: null
}

const productsReducer = (state=ininitalState, action={}) => {
  switch (action.type) {
    case QUANTITY_CHANGED:
      return { ...state, quantity: +action.payload };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return { ...state, allProducts: action.payload };
    case FETCH_ALL_PRODUCTS_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

export default productsReducer;