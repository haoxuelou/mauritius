import {
  Navigator,
} from 'react-native';

import Welcome from './welcome';
import Menu from './menu';
import MainContainer from './module/mainContainer';

let navigator;

// PushFromRight
// PushFromLeft
// FloatFromRight
// FloatFromLeft
// FloatFromBottom
// FloatFromBottomAndroid
// FadeAndroid
// HorizontalSwipeJump
// HorizontalSwipeJumpFromRight
// VerticalUpSwipeJump
// VerticalDownSwipeJump

const routeMap = new Map([
  [
    "Welcome", 
    {
      component: Welcome,
      display: false
    }
  ],
  [
    "Menu", 
    {
      component: Menu,
      sceneAnimation: Navigator.SceneConfigs.FadeAndroid
    }
  ],
  [
    "MainContainer",
    {
      component: MainContainer,
      display: false
    }
  ]
]);


export function registerNavigator(tempNavigator) {
  if (navigator) {
    return;
  }
  navigator = tempNavigator;

}

export function getNavigator() {
  return navigator;
}

export function getRouteMap() {
  return routeMap;
}