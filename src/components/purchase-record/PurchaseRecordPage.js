import React from "react";
import {connect} from "react-redux";
import {RecordListContainer} from "./RecordList";
import {PAGE_CUSTOMER_PICKER} from "../StackNavigator";
import {AddMoreButton} from "../common/AddMoreButton";
import {View} from "react-native";

export class PurchaseRecordPage extends React.Component {

  static navigationOptions = {
    title: 'Your purchase history',
  };

  render() {
    return (
      <View>
        <RecordListContainer/>
        <AddMoreButton
          message="Start a new checkout"
          onPress={() => this.props.navigation.navigate(PAGE_CUSTOMER_PICKER)}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return ({
    records: state.records
  })
};

const mapDispatchToProps = dispatch => ({
  checkout: (cart) => {
    // dispatch(addCheckoutAction(cart));
    // dispatch(clearCartAction());
  }
});

export const PurchaseRecordPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseRecordPage);
