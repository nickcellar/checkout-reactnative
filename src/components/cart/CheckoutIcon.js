import React from "react";
import {Icon} from "react-native-elements";
import {CartPage} from "./CartPage";
import {clearCartAction} from "../../actions/cartActions";
import {addRecordAction} from "../../actions/recordActions";
import {connect} from "react-redux";


export class CheckoutIcon extends React.Component {

  render() {
    return (
      <Icon
        containerStyle={{marginRight: 16}}
        onPress={() => this.isReady() && this.props.onPress()}
        name='md-checkmark'
        color={this.isReady() ? '#000000' : '#bbbbbb'}
        type='ionicon'
      />
    )
  }

  isReady() {
    return this.props.cart.productKeys.length > 0
  }
}

const mapStateToProps = state => {
  return ({
    cart: state.cart
  })
};

const mapDispatchToProps = dispatch => ({
  checkout: (cart) => {
    dispatch(addRecordAction(cart));
    dispatch(clearCartAction());
  }
});

export const CheckoutIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutIcon);
