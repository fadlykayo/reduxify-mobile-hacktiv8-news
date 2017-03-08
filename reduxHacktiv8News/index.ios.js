import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './src/reducers'
import App from './src/App'

const createStoreMiddleware = applyMiddleware(thunk)(createStore)

export default class reduxHacktiv8News extends Component {
  render() {
    return (
      <Provider store={createStoreMiddleware(rootReducers)}>
        <View style={styles.container}>
          <App />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('reduxHacktiv8News', () => reduxHacktiv8News);
