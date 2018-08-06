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
          navigate('NewItem', {callback: this.callback})
        }
      />
    );
  }

  callback(selectedItemKey) {
    let item = items[selectedItemKey];
    // console.log(item);
  }
}