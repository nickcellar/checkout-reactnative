import {ACTION_ADD_PRODUCT, ACTION_REMOVE_PRODUCT} from "../actions/cartActions";
import {rules} from "../models/rules";
import {products} from "../models/products";

export const cartReducer = (state = {productKeys: []}, action) => {

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
        })
        .filter(result => result.amount !== null);
      newState.freeItems = newState.matchedRules
        .map(rule => {
          return {
            ruleKey: rule.key,
            message: rule.message,
            item: rule.freeItem
          }
        });
      newState.totalPrice =
        newState.products.reduce((acc, product) => acc + product.price, 0) -
        newState.discounts.reduce((acc, discount) => acc + discount.amount, 0);
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

  console.debug("> newState", newState);
  return newState;
};