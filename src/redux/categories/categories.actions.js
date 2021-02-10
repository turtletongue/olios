import { FETCH_CATEGORIES, INCREMENT_LIKES, DECREMENT_LIKES } from './categories.constants';

export const fetchCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: categories
})

export const incrementLikes = (categoryId, productId) => ({
  type: INCREMENT_LIKES,
  payload: { categoryId, productId }
});

export const decrementLikes = (categoryId, productId) => ({
  type: DECREMENT_LIKES,
  payload: { categoryId, productId }
});