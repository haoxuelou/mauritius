import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	InteractionManager,
} from 'react-native';

import BaseComponent from '../base/baseContainer';

export default class Bell extends BaseComponent {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	getNavigatorBarProps() {
		return {
			hideLeftButton: true,
			title: '碰到困难时'
		};
	}

	componentDidMount() {
		InteractionManager.runAfterInteractions(this.fetchData);
	}

	fetchData() {

	}

	renderBody() {
		return <View><Text>bell</Text></View>;
	}
}