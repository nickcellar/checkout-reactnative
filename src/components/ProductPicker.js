import React from "react";
import {FlatList, View} from "react-native";
import {ProductCard} from "./ProductCard";
import {products} from "../models/products";
import {connect} from "react-redux";
import {Cart} from "./Cart";
import {addProductAction} from "../actions/cartActions";

export class ProductPicker extends React.Component {

  static navigationOptions = {
    title: 'New Item',
  };

  render() {
    return (
      <View>
        <FlatList
          data={products}
          renderItem={(product) =>
            <ProductCard
              key={product.key}
              callback={this.onProductSelected.bind(this)}
              product={product}/>
          }
        />
      </View>
    );
  }

  onProductSelected(productKey) {
    console.log(`Item with key ${productKey} is selected as new item`);
    this.props.addProduct(this.props.currentCustomerKey, productKey);
    this.props.navigation.goBack();
  }
}

const mapStateToProps = state => {
  return ({
    currentCustomerKey: state.session.currentCustomer,
  })
};

const mapDispatchToProps = dispatch => ({
  addProduct: (customerKey, productKey) => dispatch(addProductAction(customerKey, productKey))
});

export const ProductPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPicker);
