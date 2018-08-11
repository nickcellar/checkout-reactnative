import React from "react";
import {connect} from "react-redux";
import {ProductPickerContainer} from "./ProductPicker";

export class ProductSelectionPage extends React.Component {

  static navigationOptions = {
    title: 'Select a product',
  };

  render() {
    return (
      <ProductPickerContainer navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => {
  return ({
    customers: state.customers
  })
};

export const ProductSelectionPageContainer = connect(
  mapStateToProps,
)(ProductSelectionPage);
