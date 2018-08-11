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
      newState.productKeys = state.productKeys
        .concat(action.productKey);
      newState.products = newState.productKeys
        .map(key => products.find(product => product.key === key));
      newState.matchedRules = rules
        .filter(rule => rule.customerKey === action.customerKey && rule.criteria(newState.productKeys));
      newState.discounts = newState.matchedRules
        .map(rule => {
          return {
            ruleKey: rule.key,
            message: rule.message,
            amount: rule.discount(newState.productKeys)
          }
        });
      newState.freeItems = newState.matchedRules
        .map(rule => {
          return {
            ruleKey: rule.key,
            message: rule.message,
            item: rule.freeItem
          }
        });
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