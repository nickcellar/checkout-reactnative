import {createStackNavigator} from "react-navigation";
import {CustomerPickerContainer} from "./CustomerPicker";
import {Cart} from "./Cart";
import {ProductPicker} from "./ProductPicker";

export const StackNavigator = createStackNavigator({
  CustomerPicker: {screen: CustomerPickerContainer},
  Cart: {screen: Cart},
  NewItem: {screen: ProductPicker},
});