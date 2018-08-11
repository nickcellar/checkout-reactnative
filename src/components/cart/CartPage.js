import React from "react";
import {connect} from "react-redux";
import {clearCartAction} from "../../actions/cartActions";
import {addRecordAction} from "../../actions/recordActions";
import {CheckoutAlert} from "./CheckoutAlert";
import {CartContainer} from "./Cart";
import {CheckoutIconContainer} from "./CheckoutIcon";

export class CartPage extends React.Component {

  static navigationOptions = ({navigation}) => {
    return ({
      title: 'Your shopping cart',
      headerRight: (<CheckoutIconContainer navigation={navigation}/>),
    })
  };

  render() {
    return (
      <CartContainer navigation={this.props.navigation}/>
    );
  }
}

export const CartPageContainer = connect()(CartPage);
