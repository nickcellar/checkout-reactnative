import {combineReducers} from 'redux'
import {cartReducers} from "./cartReducers";

export const reducers = combineReducers({
  cart: cartReducers,
});
