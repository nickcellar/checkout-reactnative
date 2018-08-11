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

  componentDidMount() {
    this.props.navigation.setParams({
      onDoneClicked: this.onDoneClicked.bind(this)
    })
  }

  render() {
    if (this.props.cart.productKeys.length === 0) {
      return this.getAddMoreItemView("Add your first item")
    }
    return (
      <View>
        <Card
          containerStyle={{paddingBottom: 0}}
          title={`TOTAL PRICE: $${this.props.cart.totalPrice}`}>
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
          title={message}
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
      `The total price is ${this.props.cart.totalPrice}`,
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

  onProductSelected(productKey) {
    console.log(`Adding product with key ${productKey} into checkout list`);
    this.props.addProduct(this.props.currentCustomerKey, productKey);
  }
}

const mapStateToProps = state => {
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
