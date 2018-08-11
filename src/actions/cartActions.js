export const ACTION_ADD_PRODUCT = 'ACTION_ADD_PRODUCT';
export const ACTION_REMOVE_PRODUCT = 'ACTION_REMOVE_PRODUCT';

let nextTodoId = 0;

export const addProductAction = productKey => ({
  type: ACTION_ADD_PRODUCT,
  productKey
});

export const removeProductAction = productKey => ({
  type: ACTION_REMOVE_PRODUCT,
  productKey
});