import {combineReducers} from 'redux'
import {cartReducers} from "./cartReducers";
import {customerReducers} from "./customerReducers";
import {sessionReducers} from "./sessionReducers";
import {productReducers} from "./productReducers";

export const reducers = combineReducers({
  cart: cartReducers,
  customers: customerReducers,
  session: sessionReducers,
  products: productReducers,
});
