import {createStackNavigator} from "react-navigation";
import {CustomerPickerContainer} from "./CustomerPicker";
import {CartContainer} from "./Cart";
import {ProductPickerContainer} from "./ProductPicker";

export const StackNavigator = createStackNavigator({
  CustomerPicker: {screen: CustomerPickerContainer},
  Cart: {screen: CartContainer},
  NewItem: {screen: ProductPickerContainer},
});