import {createStackNavigator} from "react-navigation";
import {CustomerPicker} from "./CustomerPicker";
import {Cart} from "./Cart";
import {ProductPicker} from "./ProductPicker";

export const StackNavigator = createStackNavigator({
  CustomerPicker: {screen: CustomerPicker},
  Cart: {screen: Cart},
  NewItem: {screen: ProductPicker},
});