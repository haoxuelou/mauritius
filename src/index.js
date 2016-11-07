/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  getRouteMap,
  registerNavigator
} from './route';

const styles = StyleSheet.create({
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "yellow",
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

      let display = getRouteMap().get(route.name).display;

      if (display === false) {
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
          display: false,
          name: 'Welcome',
        }
      }
      configureScene = {
        (route, routeStack) => {
          let sceneAnimation = getRouteMap().get(route.name).sceneAnimation;
          if (sceneAnimation) {
            return sceneAnimation;
          }

          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }
      }
      renderScene = {
        (route, navigator) => {
          registerNavigator(navigator);

          let {
            component: Component,
            params
          } = getRouteMap().get(route.name);

          params = Object.assign(route.params || {}, params);
          return <Component {...params} navigator = { navigator } />
        }
      }
      navigationBar = {
        <NavigationBar
          routeMapper={this.routeMapper}
          style={styles.navBar}
        />
      }
      /> 
    );
  }
}