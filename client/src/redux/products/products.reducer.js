import {
  QUANTITY_CHANGED,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from './products.constants';

const ininitalState = {
  quantity: 1,
  allProducts: [],
  fetchedProduct: null,
  errorMessage: null
}

const productsReducer = (state=ininitalState, action={}) => {
  switch (action.type) {
    case QUANTITY_CHANGED:
      return { ...state, quantity: +action.payload, errorMessage: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, allProducts: action.payload, errorMessage: null };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

export default productsReducer;