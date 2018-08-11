import React from "react";
import {Card} from "react-native-elements";
import {ProductListItem} from "../cart/ProductListItem";
import {DiscountListItem} from "../cart/DiscountListItem";
import {FreeItemListItem} from "../cart/FreeItemListItem";

export class RecordListItem extends React.Component {

  render() {
    return (
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
    );
  }
}