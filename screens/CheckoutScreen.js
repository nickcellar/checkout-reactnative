import {Button} from "react-native";
import React from "react";
import {items} from "../models/ItemData";

export class CheckoutScreen extends React.Component {

  static navigationOptions = {
    title: 'Checkout',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="New Checkout"
        onPress={() =>
          navigate('NewItem', {
            onItemSelected: this.onItemSelected.bind(this)
          })
        }
      />
    );
  }

  onItemSelected(selectedItemKey) {
    let item = items.find(item => item.key === selectedItemKey);
    console.log(`Adding item with key ${selectedItemKey} into checkout list`);
    console.log(item);
  }
}