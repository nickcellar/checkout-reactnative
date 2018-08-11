import React from "react";
import {connect} from "react-redux";
import {RecordListContainer} from "./RecordList";

export class RecordPage extends React.Component {

  static navigationOptions = {
    title: 'Your purchase history',
  };

  render() {
    return (<RecordListContainer/>);
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

export const RecordPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordPage);
