import {Button, FlatList, View} from "react-native";
import React from "react";
import {ProductItem} from "../components/ProductItem";
import {products} from "../models/products";

export class NewItemScreen extends React.Component {

  static navigationOptions = {
    title: 'New Item',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const navigate = this.props.navigation.navigate;
    return (
      <View>
        <FlatList
          data={products}
          renderItem={(product) =>
            <ProductItem
              key={product.key}
              callback={this.onProductSelected.bind(this)}
              product={product}/>
          }
        />
      </View>
    );
  }

  onProductSelected(itemKey) {
    console.log(`Item with key ${itemKey} is selected as new item`);
    const onProductSelected = this.props.navigation.state.params.onProductSelected;
    if (onProductSelected) {
      onProductSelected(itemKey);
      this.props.navigation.goBack();
    }
  }
}