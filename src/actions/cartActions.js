export const ACTION_CART_ADD_PRODUCT = 'ACTION_CART_ADD_PRODUCT';
export const ACTION_CART_CLEAR = 'ACTION_CART_CLEAR';

export const addProductAction = (customerKey, productKey) => ({
  type: ACTION_CART_ADD_PRODUCT,
  customerKey: customerKey,
  productKey: productKey
});

export const clearCartAction = () => ({
  type: ACTION_CART_CLEAR,
});