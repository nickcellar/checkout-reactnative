import {createStackNavigator} from "react-navigation";
import {UserPicker} from "./UserPicker";
import {Cart} from "./Cart";
import {ProductPicker} from "./ProductPicker";

export const StackNavigator = createStackNavigator({
  UserPicker: {screen: UserPicker},
  Cart: {screen: Cart},
  NewItem: {screen: ProductPicker},
});