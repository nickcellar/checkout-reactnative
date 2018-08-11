export const ACTION_SET_CURRENT_CUSTOMER = 'ACTION_SET_CURRENT_CUSTOMER';

export const setCurrentCustomerAction = customerKey => ({
  type: ACTION_SET_CURRENT_CUSTOMER,
  customerKey: customerKey
});