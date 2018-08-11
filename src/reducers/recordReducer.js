import {ACTION_ADD_RECORD} from "../actions/recordActions";
import moment from "moment";

let id = 1;

export const recordReducer = (state = [], action) => {

  // console.debug("Cart reducers");
  // console.debug("> action", action);
  // console.debug("> state", state);

  let newState;

  switch (action.type) {

    case ACTION_ADD_RECORD:
      console.log(`Adding record`);
      // console.debug("> action", action);
      newState = state.concat({
        id: id++,
        cart: action.cart,
        timestamp: moment()
      });
      break;

    default:
      // console.debug("Getting initial cart");
      newState = state;
      break;
  }

  // console.debug("> newState", newState);
  return newState;
};