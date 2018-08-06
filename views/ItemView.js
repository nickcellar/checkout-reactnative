import React from "react";
import {Button, Card, Icon, Text} from 'react-native-elements'

export class ItemView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.item.item,
      callback: props.callback
    };
  }

  render() {
    return (
      <Card
        title={this.state.item.name}
        image={require('../images/download.jpg')}>
        <Text style={{marginBottom: 10}}>
          {this.state.item.description}
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
    console.log(`Item with key ${this.state.item.key} is pressed`);
    if (this.state.callback) {
      this.state.callback(this.state.item.key)
    }
  }
}