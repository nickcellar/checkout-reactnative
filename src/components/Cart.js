import {View, Alert} from "react-native";
import React from "react";
import {products} from "../models/products";
import {Button, Card, Icon, ListItem} from "react-native-elements";
import {specialRules} from "../models/specialRules";
import {setCurrentCustomerAction} from "../actions/sessionActions";
import {connect} from "react-redux";
import {CustomerPicker} from "./CustomerPicker";
import {addProductAction} from "../actions/cartActions";
import {ProductListItem} from "./ProductListItem";

export class Cart extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Cart',
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
    console.log("In the cart now");
    console.log("> Current customer", props.currentCustomer);
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
      return this.getAddMoreItemView("Add your first item")
    }
    return (
      <View>
        <Card
          containerStyle={{paddingBottom: 0}}
          title={`TOTAL PRICE: $${this.getTotalPrice()}`}>
          {this.props.cart.products.map((product, index) => (
            <ProductListItem index={index} product={product}/>
          ))}
          {this.getPassedRuleDiscountViews()}
        </Card>
        {this.getAddMoreItemView("Add more")}
      </View>
    );
  }

  getAddMoreItemView(message) {
    const navigate = this.props.navigation.navigate;
    return (
      <View style={{marginTop: 16}}>
        <Button
          raised
          containerStyle={{margin: 8}}
          backgroundColor="#03A9F4"
          title="Add more"
          onPress={() =>
            navigate('NewItem', {onProductSelected: this.onProductSelected.bind(this)})
          }
        />
      </View>
    )
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
    return !this.props.matchedRules ? null : this.props.matchedRules.map((rule, index) => {
      // const discount = rule.discount(this.state.selectedItems);
      // const freeItem = rule.freeItem;
      // // console.log(discount);
      // if (discount) {
      //   return (
      //     <ListItem
      //       key={index}
      //       roundAvatar
      //       hideChevron={true}
      //       title="Discount"
      //       titleStyle={{width: 240}}
      //       avatar={{uri: rule.avatar}}
      //       subtitle={rule.message}
      //       subtitleStyle={{width: 240}}
      //       rightTitle={`-$${discount}`}
      //     />
      //   );
      // } else if (freeItem) {
      //   return (
      //     <ListItem
      //       key={index}
      //       roundAvatar
      //       hideChevron={true}
      //       title={freeItem.message}
      //       subtitle={rule.message}
      //       avatar={{uri: rule.avatar}}
      //     />
      //   );
      // } else {
        return null;
      // }
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
    this.props.addProduct(this.props.currentCustomerKey, productKey);
  }
}


const mapStateToProps = state => {
  console.log(state);
  return ({
    currentCustomerKey: state.session.currentCustomer,
    cart: state.cart
  })
};

const mapDispatchToProps = dispatch => ({
  addProduct: (customerKey, productKey) => dispatch(addProductAction(customerKey, productKey))
});

export const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
