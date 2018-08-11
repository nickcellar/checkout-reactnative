export const ACTION_ADD_PRODUCT = 'ACTION_ADD_PRODUCT';
export const ACTION_REMOVE_PRODUCT = 'ACTION_REMOVE_PRODUCT';

export const addProductAction = (customerKey, productKey) => ({
  type: ACTION_ADD_PRODUCT,
  customerKey: customerKey,
  productKey: productKey
});

export const removeProductAction = productKey => ({
  type: ACTION_REMOVE_PRODUCT,
  productKey
});