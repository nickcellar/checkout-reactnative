import React from "react";
import {Button, Card, Icon, Text} from 'react-native-elements'

export class ItemView extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: props.item.id,
      name: props.item.name,
      image: props.item.image,
      description: props.item.description,
      price: props.item.price,
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
    return (
      <Card
        title={this.state.name}
        image={require('../images/download.jpg')}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
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