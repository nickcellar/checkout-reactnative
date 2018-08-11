import React from "react";
import {Card, Divider, Text} from "react-native-elements";
import {ProductListItem} from "../common/ProductListItem";
import {DiscountListItem} from "../common/DiscountListItem";
import {FreeItemListItem} from "../common/FreeItemListItem";
import {StyleSheet} from "react-native";

export class RecordListItem extends React.Component {

  render() {
    return (
      <Card
        containerStyle={{paddingBottom: 2}}
        dividerStyle={{display: "none", marginBottom: 0}}
        title={`TOTAL: $${this.props.record.cart.totalPrice}`}>
        <Text style={styles.text}>Customer: {this.props.record.cart.customer.name}</Text>
        <Text style={styles.text}>${this.props.record.timestamp.format("dddd, MMMM Do YYYY, h:mm:ss a")}</Text>
        <Divider style={{marginBottom: 15, marginTop: 15}}/>
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

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  }
});