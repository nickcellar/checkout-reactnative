import {Picker, View} from "react-native";
import React from "react";
import {privilegedCustomers} from "../models/privilegedCustomers";
import {Button, Text} from "react-native-elements";

export class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    this.state = {
      customerKey: ''
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Please select the client</Text>
        <Picker
          selectedValue={this.state.customerKey}
          onValueChange={(key, index) => {
            console.log(key);
            this.setState({customerKey: key})
          }}>
          {
            privilegedCustomers.map((customer, index) => {
              return (
                <Picker.Item
                  label={customer.name}
                  value={customer.key}
                  key={customer.key}/>
              )
            })
          }
        </Picker>
        <Button
          title="New checkout"
          onPress={() => {
            navigate('Checkout', {customerKey: this.state.customerKey})
          }}
        />
      </View>
    );
  }
}