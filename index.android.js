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
  TouchableOpacity,
  Navigator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Welcome from './src/welcome';
import Menu from './src/menu';

const styles = StyleSheet.create({
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  navTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  navBackBtn: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: "#555",
  },
});

class NavigationBar extends Navigator.NavigationBar {
  render() {
    var routes = this.props.navState.routeStack;

    if (routes.length) {
      var route = routes[routes.length - 1];

      if (route.display === false) {
        return null;
      }
    }

    return super.render();
  }
}

export default class mauritius extends Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false
    };
  }

  componentDidMount() {
    this.setState({
      load: true
    });
  }

  routeMapper = {
    LeftButton: (route, navigator, index, navState) => {
      if (route.index > 0) {
        return <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
            <Text style={styles.navBackBtn}><Icon size={18} name="ios-arrow-back"></Icon> back</Text>
          </TouchableOpacity>;
      } else {
        return null;
      }
    },
    RightButton: (route, navigator, index, navState) => {
      return null;
    },
    Title: (route, navigator, index, navState) => {
      return (<Text style={styles.navTitle}>{route.title}</Text>);
    },
  };

  render() {
    return ( < Navigator initialRoute = {
        {
          index: 0,
          component: this.state.load ? Menu : Welcome
        }
      }
      configureScene = {
        (route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump
      }
      renderScene = {
        (route, navigator) => {
          return <route.component {...route.params} navigator = { navigator } />
        }
      }
      navigationBar = {
        <Navigator.NavigationBar
          routeMapper={this.routeMapper}
          style={styles.navBar}
        />
      }
      /> 
    );
  }
}

AppRegistry.registerComponent('mauritius', () => mauritius);