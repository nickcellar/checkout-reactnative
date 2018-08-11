import {View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {RecordListItem} from "./RecordListItem";
import {Text} from "react-native-elements";

export class RecordList extends React.Component {

  render() {
    return (
      <View>
        {this.props.records.length > 0 ?
          this.props.records.map((record, index) => (
            <RecordListItem cart={record.cart}/>
          )) : (
            <Text>You did not have any purchase history yet</Text>
          )}
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

export const RecordListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordList);
