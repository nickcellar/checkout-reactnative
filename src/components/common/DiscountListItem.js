import React from "react";
import {ListItem} from "react-native-elements";

export class DiscountListItem extends React.Component {

  render() {
    return (
      <ListItem
        roundAvatar
        hideChevron={true}
        title="Discount"
        titleStyle={{width: 240}}
        avatar={require('../../../static/images/discount.png')}
        subtitle={this.props.discount.message}
        subtitleStyle={{width: 240}}
        rightTitle={`-$${this.props.discount.amount}`}
      />
    )
  }
}