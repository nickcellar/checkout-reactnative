import {ACTION_ADD_CHECKOUT} from "../actions/checkoutActions";
import moment from "moment";

let id = 1;

export const checkoutReducer = (state = [], action) => {

  // console.debug("Cart reducers");
  // console.debug("> action", action);
  // console.debug("> state", state);

  let newState;

  switch (action.type) {

    case ACTION_ADD_CHECKOUT:
      console.log(`Adding checkout`);
      console.debug("> action", action);
      newState = state.concat({
        id: id++,
        checkout: action.checkout,
        timestamp: moment()
      });
      break;

    default:
      // console.debug("Getting initial cart");
      newState = state;
      break;
  }

  console.debug("> newState", newState);
  return newState;
};