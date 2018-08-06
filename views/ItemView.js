import React from "react";
import {Button, Card, Icon, Text} from 'react-native-elements'

export class ItemView extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      item: props.item.item
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     id: nextProps.id,
  //     name: nextProps.name,
  //     image: nextProps.image,
  //     description: nextProps.description,
  //     price: nextProps.price,
  //   });
  // }

  render() {
    console.log(this.state.item);
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
          title='VIEW NOW'/>
      </Card>
    )
  }
}