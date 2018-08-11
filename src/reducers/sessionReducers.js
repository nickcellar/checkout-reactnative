import {customers} from "../models/customers";
import {ACTION_SET_CURRENT_CUSTOMER} from "../actions/customerActions";

export const customerReducers = (state = {}, action) => {

  // console.debug("Cart reducers");
  // console.debug("> action", action);
  // console.debug("> state", state);

  let newState;

  switch (action.type) {

    case ACTION_SET_CURRENT_CUSTOMER:
      newState = state;
      state.currentCustomer = action.customerKey;
      break;

    default:
      // console.debug("Getting initial cart");
      newState = state;
      break;
  }

  // console.debug("> newState", newState);
  return newState;
};