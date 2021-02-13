import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORY_PRODUCTS_SUCCESS,
  FETCH_CATEGORY_PRODUCTS_FAILURE
} from './categories.constants';

export const startFetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/categories');
      const json = await response.json();
      const categories = json.categories;
      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
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

export const startFetchCategoryProducts = (categoryId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/categories/${categoryId}`);
      const json = await response.json();
      const products = json.products;
      dispatch(fetchCategoryProductsSuccess(products));
    } catch (error) {
      dispatch(fetchCategoryProductsFailure(error));
    }
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