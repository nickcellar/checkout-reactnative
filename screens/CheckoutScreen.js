import {Button, View} from "react-native";
import React from "react";
import {items} from "../models/ItemData";
import {Card, ListItem} from "react-native-elements";

export class CheckoutScreen extends React.Component {

  static navigationOptions = {
    title: 'Checkout',
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Card containerStyle={{padding: 0}}>
          {
            this.state.selectedItems.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  avatar={{uri: u.avatar}}
                />
              );
            })
          }
        </Card>
        <Button
          title="New Checkout"
          onPress={() =>
            navigate('NewItem', {
              onItemSelected: this.onItemSelected.bind(this)
            })
          }
        />
      </View>
    );
  }

  onItemSelected(selectedItemKey) {
    console.log(`Adding item with key ${selectedItemKey} into checkout list`);
    let item = items.find(item => item.key === selectedItemKey);
    console.log(item);
    // this.selectedItems.push(item);
    this.setState(prevState => ({
      selectedItems: [...prevState.selectedItems, item]
    }))
  }
}