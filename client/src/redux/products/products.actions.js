import {
  QUANTITY_CHANGED,
  FETCH_ALL_PRODUCTS_FAILURE,
  FETCH_ALL_PRODUCTS_SUCCESS
} from './products.constants';

export const changeQuantity = (quantity) => ({
  type: QUANTITY_CHANGED,
  payload: quantity
});

export const startFetchAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/products');
      const json = await response.json();
      const products = json.products;
      dispatch(fetchAllProductsSuccess(products));
    } catch (error) {
      dispatch(fetchAllProductsFailure(error));
    }
  };
}

export const fetchAllProductsSuccess = (products) => ({
  type: FETCH_ALL_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchAllProductsFailure = (error) => ({
  type: FETCH_ALL_PRODUCTS_FAILURE,
  payload: error.message
});
