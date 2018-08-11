import React from "react";
import {Button, Card, Icon, Text} from 'react-native-elements'

export class ProductItem extends React.Component {

  render() {
    return (
      <Card
        title={this.props.product.item.name}
        image={require('../images/download.jpg')}>
        <Text style={{marginBottom: 10}}>
          {this.props.product.item.description}
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff'/>}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={this.onPress.bind(this)}
          title='ADD NOW'/>
      </Card>
    )
  }

  onPress() {
    const key = this.props.product.item.key;
    const callback = this.props.callback;
    console.log(`Product with key ${key} is pressed`);
    if (callback) {
      callback(key)
    }
  }
}