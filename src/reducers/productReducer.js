import {products} from "../models/products";

export const productReducer = (state = products, action) => {

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