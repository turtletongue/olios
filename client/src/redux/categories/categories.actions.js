import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORY_PRODUCTS_SUCCESS,
  FETCH_CATEGORY_PRODUCTS_FAILURE
} from './categories.constants';

import { startLoading, finishLoading } from '../loading/loading.actions';

export const startFetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await fetch('http://localhost:5000/categories');
      const json = await response.json();
      const categories = json.categories;
      if (categories) {
        dispatch(fetchCategoriesSuccess(categories));
      } else {
        dispatch(fetchCategoriesFailure(new Error('Fetching categories failed.')));
      }
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
    dispatch(finishLoading());
  };
}

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error.message
});

export const startFetchCategoryProducts = (categoryId, numberOfProducts) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await fetch(`http://localhost:5000/categories/${categoryId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numberOfProducts })
      });
      const json = await response.json();
      const products = json.products;
      if (products) {
        dispatch(fetchCategoryProductsSuccess(products));
      } else {
        dispatch(fetchCategoryProductsFailure(new Error('Fetching products failed.')));
      }
    } catch (error) {
      dispatch(fetchCategoryProductsFailure(error));
    }
    dispatch(finishLoading());
  };
}

export const fetchCategoryProductsSuccess = (products) => ({
  type: FETCH_CATEGORY_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchCategoryProductsFailure = (error) => ({
  type: FETCH_CATEGORY_PRODUCTS_FAILURE,
  payload: error.message
});