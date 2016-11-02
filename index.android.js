/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Welcome from './src/welcome';

export default class mauritius extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return ( < Navigator initialRoute = {
        {
          index: 0,
          component: Welcome
        }
      }
      configureScene = {
        (route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
      }
      renderScene = {
        (route, navigator) => {
          return <route.component {...route.params} navigator = { navigator } />
        }
      }
      / >
    );
  }
}

AppRegistry.registerComponent('mauritius', () => mauritius);