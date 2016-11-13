import React from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import BaseComponent from '../base/baseContainer';
import WebViewPage from '../component/webViewPage';

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
		// InteractionManager.runAfterInteractions(this.fetchData);
	}

	renderBody() {
		return (
			<WebViewPage uri={require('../webpage/thumbsUp/1.html')} />
		);
	}
}