import { QUANTITY_CHANGED } from './product.constants';

export const changeQuantity = (quantity) => ({
  type: QUANTITY_CHANGED,
  payload: quantity
});