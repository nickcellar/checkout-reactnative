import {createStackNavigator} from "react-navigation";
import {CustomerPickerContainer} from "./CustomerPicker";
import {CartContainer} from "./Cart";
import {ProductPickerContainer} from "./ProductPicker";
import {RecordListContainer} from "./RecordList";

export const PAGE_RECORD_LIST = "PAGE_RECORD_LIST";
export const PAGE_CUSTOMER_PICKER = "PAGE_CUSTOMER_PICKER";
export const PAGE_CART = "PAGE_CART";
export const PAGE_PRODUCT_PICKER = "PAGE_PRODUCT_PICKER";

const pages = {};
pages[PAGE_RECORD_LIST]= {screen: RecordListContainer};
pages[PAGE_CUSTOMER_PICKER]= {screen: CustomerPickerContainer};
pages[PAGE_CART]= {screen: CartContainer};
pages[PAGE_PRODUCT_PICKER]= {screen: ProductPickerContainer};

export const StackNavigator = createStackNavigator(pages);