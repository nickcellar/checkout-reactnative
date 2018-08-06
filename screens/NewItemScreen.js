import {Button, View} from "react-native";
import React from "react";
import {ItemView} from "../views/ItemView";

export class NewItemScreen extends React.Component {

  static items = [{
    id: "classic",
    name: "Classic Ad",
    price: 269.99
  }, {
    id: "standout",
    name: "Standout Ad",
    price: 322.99
  }, {
    id: "premium",
    name: "Premium Ad",
    price: 394.99
  }];

  static navigationOptions = {
    title: 'New Item',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ItemView/>
        <ItemView/>
        <ItemView/>
        <Button
          title="New Checkout"
          onPress={() =>
            navigate('Profile', {name: 'Jane'})
          }
        />
      </View>
    );
  }
}