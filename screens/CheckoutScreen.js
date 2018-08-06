import {View, StyleSheet} from "react-native";
import React from "react";
import {items} from "../models/ItemData";
import {Button, Card, ListItem, Text} from "react-native-elements";

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
    const navigate = this.props.navigation.navigate;
    if (this.state.selectedItems.length === 0) {
      return (
        <View>
          <View style={{margin: 8, marginTop: 16}}>
            <Button
              raised
              backgroundColor="#03A9F4"
              title="Add your first item"
              onPress={() =>
                navigate('NewItem', {
                  onItemSelected: this.onItemSelected.bind(this)
                })
              }
            />
          </View>
        </View>
      )
    }
    return (
      <View>
        <Card containerStyle={{padding: 0}}>
          {
            this.state.selectedItems.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  roundAvatar
                  title={item.name}
                  avatar={{uri: item.avatar}}
                />
              );
            })
          }
        </Card>
        <View style={{margin: 8, marginTop: 16}}>
          <Button
            raised
            backgroundColor="#03A9F4"
            title="Add more"
            onPress={() =>
              navigate('NewItem', {
                onItemSelected: this.onItemSelected.bind(this)
              })
            }
          />
        </View>
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