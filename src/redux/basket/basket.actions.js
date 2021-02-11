import { ADD_TO_BASKET, REMOVE_FROM_BASKET, CLEAR_FROM_BASKET, CLEAR_BASKET } from './basket.constans';

export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product
});

export const removeFromBasket = (product) => ({
  type: REMOVE_FROM_BASKET,
  payload: product
});

export const clearFromBasket = (product) => ({
  type: CLEAR_FROM_BASKET,
  payload: product
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
})