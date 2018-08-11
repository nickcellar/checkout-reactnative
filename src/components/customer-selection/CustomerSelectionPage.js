import React from "react";
import {connect} from "react-redux";
import {CustomerPickerContainer} from "./CustomerPicker";

export class CustomerSelectionPage extends React.Component {

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

export const CustomerSelectionPageContainer = connect(
  mapStateToProps,
)(CustomerSelectionPage);
