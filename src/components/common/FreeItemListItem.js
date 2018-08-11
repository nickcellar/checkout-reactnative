import React from "react";
import {ListItem} from "react-native-elements";

export class FreeItemListItem extends React.Component {

  render() {
    return (
      <ListItem
        roundAvatar
        hideChevron={true}
        title={this.props.freeItem.item.message}
        subtitle={this.props.freeItem.message}
        avatar={require('../../../static/images/freeitem.png')}
      />
    )
  }
}