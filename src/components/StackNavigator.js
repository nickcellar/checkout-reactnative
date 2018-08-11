import {createStackNavigator} from "react-navigation";
import {CustomerPickerContainer} from "./CustomerPicker";
import {CartContainer} from "./Cart";
import {ProductPicker} from "./ProductPicker";

export const StackNavigator = createStackNavigator({
  CustomerPicker: {screen: CustomerPickerContainer},
  Cart: {screen: CartContainer},
  NewItem: {screen: ProductPicker},
});