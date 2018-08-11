import {createStackNavigator,} from 'react-navigation';
import {HomeScreen} from "./screens/HomeScreen";
import {Cart} from "./components/Cart";
import {ProductPicker} from "./components/ProductPicker";

export default createStackNavigator({
  Home: {screen: HomeScreen},
  Checkout: {screen: Cart},
  NewItem: {screen: ProductPicker},
});