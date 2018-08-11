import {createStackNavigator,} from 'react-navigation';
import {HomeScreen} from "./screens/HomeScreen";
import {CheckoutScreen} from "./screens/CheckoutScreen";
import {ProductPicker} from "./components/ProductPicker";

export default createStackNavigator({
  Home: {screen: HomeScreen},
  Checkout: {screen: CheckoutScreen},
  NewItem: {screen: ProductPicker},
});