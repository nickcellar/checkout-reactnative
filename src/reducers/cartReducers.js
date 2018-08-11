import {ACTION_ADD_PRODUCT, ACTION_REMOVE_PRODUCT} from "../actions/cartActions";
import {specialRules} from "../models/specialRules";
import {rules} from "../models/rules";
import {products} from "../models/products";

export const cartReducers = (state = {productKeys: []}, action) => {

  // console.debug("Cart reducers");
  // console.debug("> action", action);
  // console.debug("> state", state);

  let newState;

  switch (action.type) {

    case ACTION_ADD_PRODUCT:
      console.log(`Adding product productKey:${action.productKey} customerKey:${action.customerKey}`);
      // console.debug("> action", action);
      newState = {};
      newState.productKeys = [...state.productKeys, action.productKey];
      newState.products = products
        .filter(product => newState.productKeys.includes(product.key));
      newState.matchedRules = rules
        .filter(rule => rule.customerKey === action.customerKey && rule.criteria(newState.productKeys));
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