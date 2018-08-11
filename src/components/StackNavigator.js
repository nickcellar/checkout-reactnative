import {createStackNavigator} from "react-navigation";
import {HomeScreen} from "../screens/HomeScreen";
import {Cart} from "./Cart";
import {ProductPicker} from "./ProductPicker";

export const StackNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Cart: {screen: Cart},
  NewItem: {screen: ProductPicker},
});