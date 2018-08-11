import React from "react";
import {Icon} from "react-native-elements";


export class CheckoutIcon extends React.Component {

  render() {
    return (
      <Icon
        containerStyle={{marginRight: 16}}
        onPress={() => this.props.onPress()}
        name='md-checkmark'
        color='#000000'
        type='ionicon'
      />
    )
  }
}