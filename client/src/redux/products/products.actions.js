import {
  QUANTITY_CHANGED,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS
} from './products.constants';

export const changeQuantity = (quantity) => ({
  type: QUANTITY_CHANGED,
  payload: quantity
});

export const startFetchProductByCriteria = (input) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/products?q=${input}`);
      const json = await response.json();
      const products = json.products;
      dispatch(fetchProductByCriteriaSuccess(products));
    } catch (error) {
      dispatch(fetchProductByCriteriaFailure(error));
    }
  };
}

export const fetchProductByCriteriaSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductByCriteriaFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error.message
});
