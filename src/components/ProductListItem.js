import React from "react";
import {ListItem} from "react-native-elements";

export class ProductListItem extends React.Component {

  render() {
    return (
      <ListItem
        key={this.props.index}
        roundAvatar
        hideChevron={true}
        rightTitle={`$${this.props.product.price}`}
        title={this.props.product.name}
        avatar={{uri: this.props.product.avatar}}
      />
    )
  }
}