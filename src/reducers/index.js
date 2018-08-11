import {combineReducers} from 'redux'
import {cartReducer} from "./cartReducer";
import {customerReducer} from "./customerReducer";
import {sessionReducer} from "./sessionReducer";
import {productReducer} from "./productReducer";
import {ruleReducer} from "./ruleReducer";
import {recordReducer} from "./recordReducer";

export const reducers = combineReducers({
  customers: customerReducer,
  products: productReducer,
  rules: ruleReducer,
  session: sessionReducer,
  cart: cartReducer,
  records: recordReducer,
});
