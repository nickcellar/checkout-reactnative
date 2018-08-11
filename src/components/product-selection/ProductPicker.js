import React from "react";
import {FlatList, View} from "react-native";
import {ProductCard} from "./ProductCard";
import {connect} from "react-redux";
import {addProductAction} from "../../actions/cartActions";

export class ProductPicker extends React.Component {
  
  render() {
    return (
      <View>
        <FlatList
          data={this.props.products}
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
    products: state.products,
  })
};

const mapDispatchToProps = dispatch => ({
  addProduct: (customerKey, productKey) => dispatch(addProductAction(customerKey, productKey))
});

export const ProductPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPicker);
