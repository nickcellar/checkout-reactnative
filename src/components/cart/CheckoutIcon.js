import React from "react";
import {Icon} from "react-native-elements";
import {clearCartAction} from "../../actions/cartActions";
import {addRecordAction} from "../../actions/recordActions";
import {connect} from "react-redux";
import {CheckoutAlert} from "./CheckoutAlert";


export class CheckoutIcon extends React.Component {

  render() {
    return (
      <Icon
        containerStyle={{marginRight: 16}}
        onPress={() => this.checkout()}
        name='md-checkmark'
        color={this.isReady() ? '#000000' : '#bbbbbb'}
        type='ionicon'
      />
    )
  }

  isReady() {
    return this.props.cart.productKeys.length > 0
  }

  checkout() {
    if (this.isReady()) {
      CheckoutAlert(this.props.cart.totalPrice, () => {
        this.props.checkout(this.props.cart);
        this.props.navigation.popToTop();
      })
    }
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
