import { FETCH_CATEGORIES } from './categories.constants';

export const fetchCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: categories
})