import React from "react";
import {connect} from "react-redux";
import {clearCartAction} from "../../actions/cartActions";
import {addRecordAction} from "../../actions/recordActions";
import {CheckoutAlert} from "./CheckoutAlert";
import {CartContainer} from "./Cart";
import {CheckoutIcon} from "./CheckoutIcon";

export class CartPage extends React.Component {

  static navigationOptions = ({navigation}) => {
    return ({
      title: 'Your shopping cart',
      headerRight: (<CheckoutIcon onPress={() => navigation.state.params.checkout()}/>),
    })
  };

  componentDidMount() {
    this.props.navigation.setParams({
      checkout: () => {
        CheckoutAlert(this.props.cart.totalPrice, () => {
          this.props.checkout(this.props.cart);
          this.props.navigation.goBack();
        })
      }
    });
  }

  render() {
    return (
      <CartContainer navigation={this.props.navigation}/>
    );
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

export const CartPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
