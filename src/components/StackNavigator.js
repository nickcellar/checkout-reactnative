import {createStackNavigator} from "react-navigation";
import {PurchaseRecordPageContainer} from "./purchase-record/PurchaseRecordPage";
import {CustomerSelectionPageContainer} from "./customer-selection/CustomerSelectionPage";
import {CartPageContainer} from "./cart/CartPage";
import {ProductSelectionPageContainer} from "./product-selection/ProductSelectionPage";

export const PAGE_RECORD_PAGE = "PAGE_RECORD_PAGE";
export const PAGE_CUSTOMER_PICKER = "PAGE_CUSTOMER_PICKER";
export const PAGE_CART = "PAGE_CART";
export const PAGE_PRODUCT_PICKER = "PAGE_PRODUCT_PICKER";

const pages = {};
pages[PAGE_RECORD_PAGE]= {screen: PurchaseRecordPageContainer};
pages[PAGE_CUSTOMER_PICKER]= {screen: CustomerSelectionPageContainer};
pages[PAGE_CART]= {screen: CartPageContainer};
pages[PAGE_PRODUCT_PICKER]= {screen: ProductSelectionPageContainer};

export const StackNavigator = createStackNavigator(pages);