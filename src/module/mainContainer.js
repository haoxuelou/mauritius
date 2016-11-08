import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Text
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import TabBar   from '../component/tabBar';

import Home     from './home';
import Plane    from './plane';
import Camera   from './camera';
import ThumbsUp from './thumbsUp';
import Bell     from './bell';

const styles = StyleSheet.create({
	/**
	 * iOS平台下, react-native-scrollable-tab-view是用ScrollView实现的
	 * 当react-native-scrollable-tab-view嵌套react-native-viewpager时, 需要给react-native-scrollable-tab-view的子View设置overflow='hidden',
	 * ScrollView的removeClippedSubviews才能起作用, 将不在屏幕可视范围的视图移除掉.
	 */
	subView: {
		overflow: 'hidden'
	}
});

//tabbar图片资源
const TAB_BAR_RESOURCES = [
	['home', '毛求欢迎您'],
	['plane', '出国前准备'],
	['camera', '图解毛求'],
	['thumbs-up', '文明游客'],
	['bell', '寻求帮助'],
];

export default class MainContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollableTabView
			 	tabBarPosition = "bottom"
				locked = {true}
				scrollWithoutAnimation = {true}
				prerenderingSiblingsNumber = {4}
				renderTabBar = {
					() => {
						/*使用自定义tabbar*/
						return <TabBar tabBarResources={TAB_BAR_RESOURCES}/>
					}
				}>
				<Home style={styles.subView}/>
				<Plane style={styles.subView}/>
				<Camera style={styles.subView}/>
				<ThumbsUp style={styles.subView}/>
				<Bell style={styles.subView}/>
			</ScrollableTabView>
		);
	}
}