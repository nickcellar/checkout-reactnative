import {Button} from "react-native";
import React from "react";

export class NewItemScreen extends React.Component {

  static navigationOptions = {
    title: 'New Item',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="New Checkout"
        onPress={() =>
          navigate('Profile', {name: 'Jane'})
        }
      />
    );
  }
}