import {Picker, View} from "react-native";
import React from "react";
import {customers} from "../models/customers";
import {Button, Text} from "react-native-elements";

export class CustomerPicker extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    this.state = {
      customerKey: customers[0].key
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View style={{margin: 14}}>
          <Text style={{marginBottom: 8}}>Please select the client:</Text>
          <Picker
            style={{backgroundColor: "#ffffff", borderColor: "#444444"}}
            mode={"dropdown"}
            selectedValue={this.state.customerKey}
            onValueChange={(key, index) => {
              this.setState({customerKey: key})
            }}>
            {
              customers.map((customer, index) => {
                return (
                  <Picker.Item
                    styles={{background: "#ffffff"}}
                    label={customer.name}
                    value={customer.key}
                    key={customer.key}/>
                )
              })
            }
          </Picker>
        </View>
        <Button
          title="New checkout"
          onPress={() => {
            navigate('Cart', {customerKey: this.state.customerKey})
          }}
        />
      </View>
    );
  }
}