import {View} from "react-native";
import React from "react";
import {Card, Text} from "react-native-elements";
import {connect} from "react-redux";
import {ProductListItem} from "./ProductListItem";
import {DiscountListItem} from "./DiscountListItem";
import {FreeItemListItem} from "./FreeItemListItem";
import {AddMoreButton} from "../AddMoreButton";
import {PAGE_PRODUCT_PICKER} from "../StackNavigator";

export class Cart extends React.Component {

  render() {
    return (
      <View>
        <Text style={{padding: 16}}>Customer: {this.props.currentCustomerKey}</Text>
        {this.props.cart.productKeys.length > 0 && (
          <Card
            containerStyle={{paddingBottom: 0}}
            title={`TOTAL PRICE: $${this.props.cart.totalPrice}`}>
            {this.props.cart.products.map((product, index) => (
              <ProductListItem key={`product-${index}`} product={product}/>
            ))}
            {this.props.cart.discounts.map((discount, index) => (
              <DiscountListItem key={`discount-${index}`} discount={discount}/>
            ))}
            {this.props.cart.freeItems.map((freeItem, index) => (
              <FreeItemListItem key={`freeItem-${index}`} freeItem={freeItem}/>
            ))}
          </Card>
        )}
        <AddMoreButton
          message={this.props.cart.productKeys.length > 0 ? "Add more" : "Add your first item"}
          onPress={() => this.props.navigation.navigate(PAGE_PRODUCT_PICKER)}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return ({
    currentCustomerKey: state.session.currentCustomer,
    cart: state.cart
  })
};

export const CartContainer = connect(
  mapStateToProps
)(Cart);