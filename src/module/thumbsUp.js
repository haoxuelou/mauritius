import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	InteractionManager,
} from 'react-native';

import BaseComponent from '../base/baseContainer';

export default class ThumbsUp extends BaseComponent {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	getNavigatorBarProps() {
		return {
			hideLeftButton: true,
			title: '做文明游客'
		};
	}

	componentDidMount() {
		InteractionManager.runAfterInteractions(this.fetchData);
	}

	fetchData() {

	}

	renderBody() {
		return <View><Text>thumbs-up</Text></View>;
	}
}