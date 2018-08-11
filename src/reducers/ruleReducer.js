import {rules} from "../models/rules";

export const ruleReducer = (state = rules, action) => {

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