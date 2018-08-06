import {Button, FlatList, View} from "react-native";
import React from "react";
import {ItemView} from "../views/ItemView";
import {products} from "../models/products";

export class NewItemScreen extends React.Component {

  static navigationOptions = {
    title: 'New Item',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const navigate = this.props.navigation.navigate;
    return (
      <View>
        <FlatList
          data={products}
          renderItem={(item) =>
            <ItemView
              key={item.key}
              callback={this.onItemPressed.bind(this)}
              item={item}/>
          }
        />
      </View>
    );
  }

  onItemPressed(itemKey) {
    console.log(`Item with key ${itemKey} is selected as new item`);
    const onItemSelected = this.props.navigation.state.params.onItemSelected;
    if (onItemSelected) {
      onItemSelected(itemKey);
      this.props.navigation.goBack();
    }
  }
}