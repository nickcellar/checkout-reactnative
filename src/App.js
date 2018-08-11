import React from "react";
import {Provider} from "react-redux";
import {StyleSheet, View} from 'react-native';
import {StackNavigator} from "./components/StackNavigator";
import {createStore} from "redux";
import {reducers} from "./reducers";

const store = createStore(reducers);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StackNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});