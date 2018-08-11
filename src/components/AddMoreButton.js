import React from "react";
import {Button, ListItem} from "react-native-elements";
import {View} from "react-native";

export class AddMoreButton extends React.Component {

  render() {
    return (
      <View style={{marginTop: 16}}>
        <Button
          raised
          containerStyle={{margin: 8}}
          backgroundColor="#03A9F4"
          title={this.props.message}
          onPress={() => this.props.navigate('NewItem')}
        />
      </View>
    )
  }
}