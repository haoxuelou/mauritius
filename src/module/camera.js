import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	InteractionManager,
} from 'react-native';

import BaseComponent from '../base/baseContainer';

export default class Camera extends BaseComponent {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	getNavigatorBarProps() {
		return {
			hideLeftButton: true,
			title: '图解毛里求斯'
		};
	}

	componentDidMount() {
		InteractionManager.runAfterInteractions(this.fetchData);
	}

	fetchData() {

	}

	renderBody() {
		return <View><Text>camera</Text></View>;
	}
}