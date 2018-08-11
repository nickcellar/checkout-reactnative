import {ACTION_SET_CURRENT_CUSTOMER} from "../actions/sessionActions";
import {customers} from "../models/customers";

export const sessionReducer = (state = {}, action) => {

  // console.debug("Cart reducers");
  // console.debug("> action", action);
  // console.debug("> state", state);

  let newState;

  switch (action.type) {

    case ACTION_SET_CURRENT_CUSTOMER:
      newState = state;
      state.customerKey = action.customerKey;
      state.customer = customers.find(customer => customer.key === state.customerKey);
      break;

    default:
      // console.debug("Getting initial cart");
      newState = state;
      break;
  }

  // console.debug("> newState", newState);
  return newState;
};