import {customers} from "../models/customers";

export const customerReducer = (state = customers, action) => {

  // console.debug("Cart reducers");
  // console.debug("> action", action);
  // console.debug("> state", state);

  let newState;

  switch (action.type) {

    default:
      // console.debug("Getting initial cart");
      newState = state;
      break;
  }

  // console.debug("> newState", newState);
  return newState;
};