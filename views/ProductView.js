import React from "react";
import {Button, Card, Icon, Text} from 'react-native-elements'

export class ProductView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: props.product.item,
      callback: props.callback
    };
  }

  render() {
    return (
      <Card
        title={this.state.product.name}
        image={require('../images/download.jpg')}>
        <Text style={{marginBottom: 10}}>
          {this.state.product.description}
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff'/>}
          backgroundColor='#03A9F4'
          // fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={this.onPress.bind(this)}
          title='VIEW NOW'/>
      </Card>
    )
  }

  onPress() {
    const key = this.state.product.key;
    const callback = this.state.callback;
    console.log(`Product with key ${key} is pressed`);
    if (callback) {
      callback(key)
    }
  }
}