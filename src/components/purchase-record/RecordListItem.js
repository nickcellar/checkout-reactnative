import React from "react";
import {Card} from "react-native-elements";
import {ProductListItem} from "../common/ProductListItem";
import {DiscountListItem} from "../common/DiscountListItem";
import {FreeItemListItem} from "../common/FreeItemListItem";

export class RecordListItem extends React.Component {

  render() {
    return (
      <Card
        containerStyle={{paddingBottom: 2}}
        title={`TOTAL: $${this.props.record.cart.totalPrice}\n${this.props.record.timestamp.format("dddd, MMMM Do YYYY, h:mm:ss a")}`}>
        {this.props.record.cart.products.map((product, index) => (
          <ProductListItem key={`product-${index}`} product={product}/>
        ))}
        {this.props.record.cart.discounts.map((discount, index) => (
          <DiscountListItem key={`discount-${index}`} discount={discount}/>
        ))}
        {this.props.record.cart.freeItems.map((freeItem, index) => (
          <FreeItemListItem key={`freeItem-${index}`} freeItem={freeItem}/>
        ))}
      </Card>
    );
  }
}