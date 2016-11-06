/**
 * Created by lipeiwei on 16/10/4.
 */
import Welcome from './welcome';
import Menu from './menu';

import {
  Navigator,
} from 'react-native';

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

const routeMap = new Map();

routeMap.set('Welcome', {
  component: Welcome
});

routeMap.set('Menu', {
  component: Menu,
  sceneAnimation: Navigator.SceneConfigs.FadeAndroid
});


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