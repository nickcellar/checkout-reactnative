export const ACTION_ADD_CHECKOUT = 'ACTION_ADD_CHECKOUT';

export const addCheckoutAction = (cart) => ({
  type: ACTION_ADD_CHECKOUT,
  checkout: cart
});