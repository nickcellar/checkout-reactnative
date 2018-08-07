import {View, Alert} from "react-native";
import React from "react";
import {products} from "../models/products";
import {Button, Card, Icon, ListItem} from "react-native-elements";
import {specialRules} from "../models/specialRules";

export class CheckoutScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Checkout',
    headerRight: (
      <Icon
        containerStyle={{marginRight: 16}}
        onPress={navigation.state.params.onDoneClicked}
        name='md-checkmark'
        color='#000000'
        type='ionicon'
      />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onDoneClicked: this.onDoneClicked.bind(this)
    })
  }

  render() {
    const navigate = this.props.navigation.navigate;
    if (this.state.selectedItems.length === 0) {
      return (
        <View style={{marginTop: 16}}>
          <Button
            raised
            containerStyle={{margin: 8}}
            backgroundColor="#03A9F4"
            title="Add your first item"
            onPress={() =>
              navigate('NewItem', {
                onProductSelected: this.onProductSelected.bind(this)
              })
            }
          />
        </View>
      )
    }
    return (
      <View>
        <Card
          containerStyle={{paddingBottom: 0}}
          title={`TOTAL PRICE: $${this.getTotalPrice()}`}>
          {this.getSelectedItemViews()}
          {this.getPassedRuleDiscountViews()}
        </Card>
        <View style={{marginTop: 16}}>
          <Button
            raised
            containerStyle={{margin: 8}}
            backgroundColor="#03A9F4"
            title="Add more"
            onPress={() =>
              navigate('NewItem', {
                onProductSelected: this.onProductSelected.bind(this)
              })
            }
          />
        </View>
      </View>
    );
  }

  onDoneClicked() {
    Alert.alert(
      'Are you sure to checkout?',
      `The total price is ${this.getTotalPrice()}`,
      [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => console.log('OK Pressed')
      }]
    )
  }

  getSelectedItemViews() {
    return this.state.selectedItems.map((item, index) => {
      return (
        <ListItem
          key={index}
          roundAvatar
          hideChevron={true}
          rightTitle={`$${item.price}`}
          title={item.name}
          avatar={{uri: item.avatar}}
        />
      );
    })
  }

  getPassedRules() {
    const customerKey = this.props.navigation.state.params.customerKey;
    // console.log("customerKey", customerKey);
    const rules = specialRules[customerKey]
      .filter(rule => {
        return rule.criteria(this.state.selectedItems)
      });
    // console.log(rules);
    return rules
  }

  getPassedRuleDiscountViews() {
    return this.getPassedRules().map((rule, index) => {
      const discount = rule.discount(this.state.selectedItems);
      const freeItem = rule.freeItem;
      // console.log(discount);
      if (discount) {
        return (
          <ListItem
            key={index}
            roundAvatar
            hideChevron={true}
            title={rule.message}
            avatar={{uri: rule.avatar}}
            rightTitle={`-$${discount}`}
          />
        );
      } else if (freeItem) {
        return (
          <ListItem
            key={index}
            roundAvatar
            hideChevron={true}
            title={freeItem.message}
            avatar={{uri: rule.avatar}}
          />
        );
      } else {
        return null;
      }
    })
  }

  getTotalPrice() {
    return this.state.selectedItems.reduce((acc, item) => {
      return acc + item.price
    }, 0) - this.getPassedRules().reduce((acc, rule) => {
      return acc + rule.discount(this.state.selectedItems);
    }, 0)
  }

  onProductSelected(productKey) {
    console.log(`Adding product with key ${productKey} into checkout list`);
    let item = products.find(item => item.key === productKey);
    // console.log(item);
    // this.selectedItems.push(item);
    this.setState(prevState => ({
      selectedItems: [...prevState.selectedItems, item]
    }))
  }
}