import React from "react";
import {Button, Card, Icon, Text} from 'react-native-elements'

export class ItemView extends React.Component {

  render() {
    return (
      <Card
        title='HELLO WORLD'
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