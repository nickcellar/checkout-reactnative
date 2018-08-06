import {Button, FlatList, View} from "react-native";
import React from "react";
import {ItemView} from "../views/ItemView";
import {items} from "../models/ItemData";

export class NewItemScreen extends React.Component {

  static navigationOptions = {
    title: 'New Item',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <FlatList
          data={items}
          renderItem={(item) =>
            <ItemView
              key={item.key}
              item={item}/>
          }
        />
      </View>
    );
  }
}