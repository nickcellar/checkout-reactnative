import {Alert, View} from "react-native";
import React from "react";
import {products} from "../models/products";
import {Button, Card, Icon} from "react-native-elements";
import {specialRules} from "../models/specialRules";
import {connect} from "react-redux";
import {addProductAction} from "../actions/cartActions";
import {ProductListItem} from "./ProductListItem";
import {DiscountListItem} from "./DiscountListItem";
import {FreeItemListItem} from "./FreeItemListItem";

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
            <ProductListItem key={`product-${index}`} product={product}/>
          ))}
          {this.props.cart.discounts.map((discount, index) => (
            <DiscountListItem key={`discount-${index}`} discount={discount}/>
          ))}
          {this.props.cart.freeItems.map((freeItem, index) => (
            <FreeItemListItem key={`freeItem-${index}`} freeItem={freeItem}/>
          ))}
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
  // console.log(state);
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
