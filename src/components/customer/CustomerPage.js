import React from "react";
import {connect} from "react-redux";
import {CustomerPickerContainer} from "./CustomerPicker";

export class CustomerPage extends React.Component {

  static navigationOptions = {
    title: 'Select a customer',
  };

  render() {
    return (
      <CustomerPickerContainer navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => {
  return ({
    customers: state.customers
  })
};

export const CustomerPageContainer = connect(
  mapStateToProps,
)(CustomerPage);
