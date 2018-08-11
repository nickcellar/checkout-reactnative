import React from "react";
import {Button} from "react-native-elements";
import {View} from "react-native";
import {PAGE_PRODUCT_PICKER} from "../StackNavigator";

export class AddMoreButton extends React.Component {

  render() {
    return (
      <View style={{marginTop: 16}}>
        <Button
          raised
          containerStyle={{margin: 8}}
          backgroundColor="#03A9F4"
          title={this.props.message}
          onPress={() => this.props.onPress()}
        />
      </View>
    )
  }
}