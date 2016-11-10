import React from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import BaseComponent from '../base/baseContainer';
import WebViewPage from '../component/webViewPage';

export default class Plane extends BaseComponent {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	// ds
	  };
	}

	getNavigatorBarProps() {
		return {
			hideLeftButton: true,
			title: '出国前准备'
		};
	}

	componentDidMount() {
		// InteractionManager.runAfterInteractions(this.fetchData);
	}

	renderBody() {
		return (
			<WebViewPage uri={require('../webpage/plane/1.html')} />
		);
	}
}