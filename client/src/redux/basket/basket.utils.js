export const appendItemToBasket = (basketItems, basketItemToAdd) => {
  const existingBasketItem = basketItems.find(basketItem => basketItem.id === basketItemToAdd.id);

  if (existingBasketItem) {
      return basketItems.map(basketItem => (basketItem.id === basketItemToAdd.id) ?
              { ...basketItem, quantity: basketItem.quantity + basketItemToAdd.quantity }
              : basketItem 
          
      );
  }

  return [ ...basketItems, { ...basketItemToAdd } ];
}

export const clearBasketItem = (basketItems, basketItemToDelete) => {
  return basketItems.filter(basketItem => basketItem.id !== basketItemToDelete.id);
}

export const removeItemFrombasket = (basketItems, basketItemToRemove) => {
  return basketItems.map(basketItem => (basketItem.id === basketItemToRemove.id) ?
          { ...basketItem, quantity: basketItem.quantity - 1 }
          : basketItem 
  ).filter(basketItem => basketItem.quantity > 0);
}