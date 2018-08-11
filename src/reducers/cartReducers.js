import {ACTION_ADD_PRODUCT, ACTION_REMOVE_PRODUCT} from "../actions/cartActions";

export const cartReducers = (state = [], action) => {

  // console.debug("Cart reducers");
  // console.debug("> action", action);
  // console.debug("> state", state);

  let newState;

  switch (action.type) {

    case ACTION_ADD_PRODUCT:
      console.log("Adding product");
      newState = [...state, {
        productKey: action.productKey,
      }];
      break;

    case ACTION_REMOVE_PRODUCT:
      console.log("Toggling todo");
      // FIXME
      newState = state;
      break;

    default:
      // console.debug("Getting initial cart");
      newState = state;
      break;
  }

  // console.debug("> newState", newState);
  return newState;
};