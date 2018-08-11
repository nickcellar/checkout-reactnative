import {combineReducers} from 'redux'
import {cartReducers} from "./cartReducers";
import {customerReducers} from "./customerReducers";

export const reducers = combineReducers({
  cart: cartReducers,
  customers: customerReducers,
});
