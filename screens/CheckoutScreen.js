import {Button} from "react-native";
import React from "react";

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
          navigate('NewItem', {name: 'Jane'})
        }
      />
    );
  }
}