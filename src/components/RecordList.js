import {View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {RecordListItem} from "./RecordListItem";

export class RecordList extends React.Component {

  render() {
    console.log(this.props.records);
    return (
      <View>
        {this.props.records.map((record, index) => (
          <RecordListItem cart={record.cart}/>
        ))}
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
