import {Button, FlatList, View} from "react-native";
import React from "react";
import {ItemView} from "../views/ItemView";

export class NewItemScreen extends React.Component {

  items = [{
    key: "classic",
    name: "Classic Ad",
    description: "hihihi",
    image: "../images/download.jpg",
    price: 269.99
  }, {
    key: "standout",
    name: "Standout Ad",
    description: "hihihi",
    image: "../images/download.jpg",
    price: 322.99
  }, {
    key: "premium",
    name: "Premium Ad",
    description: "hihihi",
    image: "../images/download.jpg",
    price: 394.99
  }];

  static navigationOptions = {
    title: 'New Item',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <FlatList
          data={this.items}
          renderItem={(item) =>
            <ItemView
              key={item.key}
              item={item}/>
          }
        />
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